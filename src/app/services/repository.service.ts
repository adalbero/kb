import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { EMPTY_USER, KBArticle, KBRepository, KBTag, KBUser } from '../model/app-model';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  private repository?: KBRepository;
  private users?: KBUser[];

  articles$: Subject<KBArticle[]> = new Subject();

  constructor(private http: HttpClient) {
    this.loadRepository().subscribe();
    this.loadUsers().subscribe();
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

  getUser(user: string): KBUser {
    let u: KBUser = EMPTY_USER;
    if (this.users) {
      u = this.users.find(x => x.user === user) || u;
    }

    return u;
  }

  filter(byTag?: string) {
    if (this.repository) {
      const options = byTag?.split(' ');

      const list = this.repository.articles.filter(
        (a) => !byTag || this.contains(a.tags, options)
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

  loadUsers(): Observable<KBUser[]> {
    return this.loadFile('articles/users.json').pipe(
      map((users: KBUser[]) => {
        this.users = users;
        return users;
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
