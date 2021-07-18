import { Component, Input, OnInit } from '@angular/core';
import { EMPTY_USER, KBArticle, KBUser } from 'src/app/model/app-model';
import { PhotosService } from 'src/app/services/photos.service';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-article-card2',
  templateUrl: './article-card2.component.html',
  styleUrls: ['./article-card2.component.css'],
})
export class ArticleCard2Component implements OnInit {
  @Input() article?: KBArticle;
  user: KBUser = EMPTY_USER;

  photo?: string;

  constructor(public photos: PhotosService, public repo: RepositoryService) { }

  ngOnInit(): void {
    if (this.article) {
      if (this.article.img) {
        this.photo = this.article.img;
      } else {
        const idx = Math.abs(this.getHash(this.article?.id)) % 100;
        console.log(idx);
        this.photos.requestPhoto('code', idx).subscribe((url) => (this.photo = url));
      }

      if (this.article.author) {
        this.user = this.repo.getUser(this.article.author);
      }
    }
  }

  getTags() {
    return '#' + this.article?.tags.join(' #');
  }

  getHash(s?: string): number {
    if (!s) return 0;

    return s.split("").reduce(function (a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);
  }
}
