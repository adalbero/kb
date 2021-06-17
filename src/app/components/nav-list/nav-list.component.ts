import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {

  datasource: string[] = ['Main.md', 'ngx-markdown.md', 'markdown-it.md', 'panel/panel.md'];

  constructor(private app: AppService) { }

  ngOnInit(): void {
  }

  onChange(ev: MatSelectionListChange) {
    const src = ev.options[0].value;
    this.app.src$.emit(src);
  }

}
