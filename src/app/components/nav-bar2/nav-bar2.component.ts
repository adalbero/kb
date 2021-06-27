import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { KBArticle } from 'src/app/model/app-model';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-nav-bar2',
  templateUrl: './nav-bar2.component.html',
  styleUrls: ['./nav-bar2.component.css'],
})
export class NavBar2Component implements OnInit {
  collapsed = false;
  searchField: FormControl = new FormControl();
  articles: KBArticle[] = [];

  constructor(private repo: RepositoryService) {}

  ngOnInit(): void {
    this.searchField?.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((term) => {
        this.repo.filter(term);
      });

    this.repo.articles$.subscribe((articles) => {
      this.articles = articles;
    });
  }

  getLink(article: KBArticle): string {
    return `article/${article.id}`;
  }
}
