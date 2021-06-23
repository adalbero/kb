import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { KBArticle, KBRepository, KBTag } from '../model/app-model';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  private repository?: KBRepository;

  articles$: Subject<KBArticle[]> = new Subject();

  constructor(private http: HttpClient) {
    this.loadRepository().subscribe();
  }

  requestRepository(): Observable<KBRepository> {
    if (this.repository) {
      return of(this.repository);
    }

    return this.loadRepository();
  }

  contains(list: string[], options?: string[]): boolean {
    if (options) {
      return !!list.find((item) => options.includes(item));
    } else {
      return true;
    }
  }

  filter(byTag?: string) {
    if (this.repository) {
      const options = byTag?.split(' ');

      const list = this.repository.articles.filter((a) =>
        this.contains(a.tags, options)
      );
      this.articles$.next(list);
    }
  }

  getAllTags(articles: KBArticle[]): KBTag[] {
    const tags: KBTag[] = [];

    articles.map((a) =>
      a.tags.forEach((name) => {
        const tag = tags.find((t) => t.tag === name);
        if (tag) {
          tag.count++;
        } else {
          tags.push({ tag: name, count: 1 });
        }
      })
    );

    return tags.sort((a, b) => a.tag.localeCompare(b.tag));
  }

  loadRepository(): Observable<KBRepository> {
    return this.loadFile('articles/index.json').pipe(
      map((repo: KBRepository) => {
        this.repository = repo;
        this.filter();
        return repo;
      })
    );
  }

  loadFile(file: string): Observable<any> {
    return this.http.get<any>(file);
  }

  requestArticles(tag?: string): Observable<KBArticle[]> {
    console.log('request ', tag);
    return this.requestRepository().pipe(
      map((repo) => repo.articles.filter((a) => !tag || a.tags.includes(tag)))
    );
  }

  requestArticle(id: string): Observable<KBArticle | undefined> {
    return this.requestArticles().pipe(
      map((articles) => articles.find((a) => a.id === id))
    );
  }
}
