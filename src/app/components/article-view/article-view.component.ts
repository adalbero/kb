import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  UrlMatchResult,
  UrlSegment,
  UrlSegmentGroup,
} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { KBArticle } from 'src/app/model/app-model';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css'],
})
export class ArticleViewComponent implements OnInit {
  article?: KBArticle;
  id = '';

  constructor(private route: ActivatedRoute, private repo: RepositoryService) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          console.log('params', params);
          this.id = params.get('id') || '';
          console.log('id', this.id);
          return this.repo.requestArticle(this.id);
        })
      )
      .subscribe((article) => {
        this.article = article;
      });
  }

  getPath(): string {
    if (this.article) {
      return `articles/${this.article.path}/${this.article?.file}`;
    } else {
      return '';
    }
  }

  static routeMatcher(
    segments: UrlSegment[],
    group: UrlSegmentGroup,
    route: Route
  ): UrlMatchResult {
    if (segments.length > 0) {
      if (segments[0].path == 'article') {
        return {
          consumed: segments,
          posParams: {
            id: new UrlSegment(segments.slice(1).join('/'), {}),
          },
        };
      }
    }
    return {
      consumed: [],
    };
  }
}
