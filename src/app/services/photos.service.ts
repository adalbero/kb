import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { createApi } from 'unsplash-js';
import { Full, Random } from 'unsplash-js/dist/methods/photos/types';
import { Photos } from 'unsplash-js/dist/methods/search/types/response';

const unsplash = createApi({
  accessKey: '0NFTl6pzGs4TGWeKUFUM-PAUhvxItEz62qtMb-LKrQE',
});

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor() {}

  requestPhoto(term: string, idx: number = 0): Observable<string> {
    return from(unsplash.search.getPhotos({ query: term, page: idx / 10 })).pipe(
      map((result) => {
        const resp = result.response;
        if (resp) {
          const list = resp.results;
          const url = list[idx % list.length].urls.small;
          console.log({ url });
          return url;
        } else {
          return '/assets/adalbero-f-guimaraes.jpg';
        }
      })
    );
  }
}
