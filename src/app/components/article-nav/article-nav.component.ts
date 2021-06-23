import { Component, Input, OnInit } from '@angular/core';
import { KBArticle } from 'src/app/model/app-model';

@Component({
  selector: 'app-article-nav',
  templateUrl: './article-nav.component.html',
  styleUrls: ['./article-nav.component.css'],
})
export class ArticleNavComponent implements OnInit {
  @Input() article?: KBArticle;

  constructor() {}

  ngOnInit(): void {}
}
