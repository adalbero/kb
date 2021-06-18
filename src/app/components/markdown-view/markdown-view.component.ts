import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-markdown-view',
  templateUrl: './markdown-view.component.html',
  styleUrls: ['./markdown-view.component.css']
})
export class MarkdownViewComponent implements OnInit {

  src: string = this.getPath('Main.md');

  constructor(private app: AppService) {}

  ngOnInit(): void {
    this.app.src$.subscribe(src => this.src = this.getPath(src));  
  }

  getPath(src: string) {
    return `posts/${src}`;
  }
}
