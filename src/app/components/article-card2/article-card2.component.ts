import { Component, Input, OnInit } from '@angular/core';
import { KBArticle } from 'src/app/model/app-model';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-article-card2',
  templateUrl: './article-card2.component.html',
  styleUrls: ['./article-card2.component.css'],
})
export class ArticleCard2Component implements OnInit {
  @Input() article?: KBArticle;

  photo?: string;

  constructor(public photos: PhotosService) {}

  ngOnInit(): void {
    this.photos.requestPhoto('cat').subscribe((url) => (this.photo = url));
  }

  getTags() {
    return '#' + this.article?.tags.join(' #');
  }
}
