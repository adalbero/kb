import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { KBArticle } from 'src/app/model/app-model';
import { AppService } from 'src/app/services/app.service';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css'],
})
export class NavListComponent implements OnInit {
  datasource: KBArticle[] = [];

  constructor(private app: AppService, private repo: RepositoryService) {}

  ngOnInit(): void {
    this.repo.repository$.subscribe((repo) => {
      this.datasource = repo.articles;
    });
  }

  onChange(ev: MatSelectionListChange) {
    const src = ev.options[0].value;
    this.app.src$.emit(src);
  }
}
