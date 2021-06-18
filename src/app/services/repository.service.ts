import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EMPTY_REPO, KBRepository } from '../model/app-model';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  repository$: BehaviorSubject<KBRepository> = new BehaviorSubject(EMPTY_REPO);

  constructor(private http: HttpClient) {
    this.loadRepository().subscribe();
  }

  loadRepository(): Observable<KBRepository> {
    return this.loadFile('assets/repository.json').pipe(
      map((repo: KBRepository) => {
        this.repository$.next(repo);
        return repo;
      })
    );
  }

  loadFile(file: string): Observable<any> {
    return this.http.get<any>(file);
  }
}
