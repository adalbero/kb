import { Component, Input, OnInit } from '@angular/core';
import { KBArticle } from 'src/app/model/app-model';

@Component({
  selector: 'app-article-index2',
  templateUrl: './article-index2.component.html',
  styleUrls: ['./article-index2.component.css'],
})
export class ArticleIndex2Component implements OnInit {
  @Input() article?: KBArticle;

  constructor() {}

  ngOnInit(): void {}
}
