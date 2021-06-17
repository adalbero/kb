import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-show-content',
  templateUrl: './show-content.component.html',
  styleUrls: ['./show-content.component.css'],
})
export class ShowContentComponent implements OnInit {
  src: string = this.getPath('Main.md');

  constructor(private app: AppService) {}

  ngOnInit(): void {
    this.app.src$.subscribe(src => this.src = this.getPath(src));  
  }

  getPath(src: string) {
    return `posts/${src}`;
  }
}
