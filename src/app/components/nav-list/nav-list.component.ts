import { Component, OnInit } from '@angular/core';
import { KBArticle, KBTag } from 'src/app/model/app-model';
import { AppService } from 'src/app/services/app.service';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css'],
})
export class NavListComponent implements OnInit {
  articles: KBArticle[] = [];
  tags: KBTag[] = [];

  expandedIndex = 0;

  constructor(public app: AppService, public repo: RepositoryService) {}

  ngOnInit(): void {
    this.repo.requestRepository().subscribe((r) => {
      this.articles = [];
    });

    this.repo.articles$.subscribe((articles) => {
      console.log(articles);
      this.tags = this.repo.getAllTags(articles);
    });
  }

  getLink(article: KBArticle): string {
    return `article/${article.id}`;
  }

  onOpen(tag: any) {
    this.repo
      .requestArticles(tag.tag)
      .subscribe((list) => (this.articles = list));
  }
}
