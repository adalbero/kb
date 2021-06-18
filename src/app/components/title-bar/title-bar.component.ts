import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css'],
})
export class TitleBarComponent implements OnInit {
  constructor(private repo: RepositoryService, private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    //this.repo.loadRepository().subscribe();
    this.router.navigate(['/']);
  }
}
