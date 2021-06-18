import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css'],
})
export class TitleBarComponent implements OnInit {
  constructor(private repo: RepositoryService) {}

  ngOnInit(): void {}

  onClick() {
    this.repo.loadRepository().subscribe();
  }
}
