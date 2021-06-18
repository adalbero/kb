import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { KBArticle, KBRepository } from '../model/app-model';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  private repository?: KBRepository;

  constructor(private http: HttpClient) {
    this.loadRepository().subscribe();
  }

  requestRepository(): Observable<KBRepository> {
    if (this.repository) {
      return of(this.repository);
    }

    return this.loadRepository();
  }

  loadRepository(): Observable<KBRepository> {
    return this.loadFile('articles/_index.json').pipe(
      map((repo: KBRepository) => {
        this.repository = repo;
        return repo;
      })
    );
  }

  loadFile(file: string): Observable<any> {
    return this.http.get<any>(file);
  }

  requestArticles(): Observable<KBArticle[]> {
    return this.requestRepository().pipe(map((repo) => repo.articles));
  }

  requestArticle(id: string): Observable<KBArticle | undefined> {
    return this.requestArticles().pipe(
      map((articles) => articles.find((a) => a.id === id))
    );
  }
}
