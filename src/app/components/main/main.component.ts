import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  searchField: FormControl = new FormControl();

  constructor(public app: AppService, private repo: RepositoryService) {}

  ngOnInit(): void {
    this.searchField?.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((term) => {
        this.repo.filter(term);
      });
  }

  onToggleClose() {
    this.app.navClosed = !this.app.navClosed;
  }
}
