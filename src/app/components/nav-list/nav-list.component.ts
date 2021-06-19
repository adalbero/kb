import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Observable } from 'rxjs';
import { KBArticle } from 'src/app/model/app-model';
import { AppService } from 'src/app/services/app.service';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css'],
})
export class NavListComponent implements OnInit {
  articles: KBArticle[] = [];
  tags: string[] = [];

  expandedIndex = 0;

  constructor(private app: AppService, private repo: RepositoryService) {}

  ngOnInit(): void {
    this.repo.requestRepository().subscribe((r) => {
      this.tags = this.repo.getTags(r);
      this.articles = [];
    });
  }

  getLink(article: KBArticle): string {
    return `article/${article.id}`;
  }

  onOpen(tag: any) {
    this.repo.requestArticles(tag).subscribe((list) => (this.articles = list));
  }
}
