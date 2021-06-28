import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { KBArticle } from 'src/app/model/app-model';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articles: KBArticle[] = [];
  searchField: FormControl = new FormControl();

  constructor(private repo: RepositoryService) {}

  ngOnInit(): void {
    this.searchField?.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((term) => {
        this.filter(term);
      });

    this.repo.articles$.subscribe((articles) => {
      this.articles = articles;
    });

    this.filter(this.searchField.value);
  }

  filter(term: string) {
    this.repo.filter(term);
  }
}
