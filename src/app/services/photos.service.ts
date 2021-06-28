import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { createApi } from 'unsplash-js';
import { Random } from 'unsplash-js/dist/methods/photos/types';

const unsplash = createApi({
  accessKey: '0NFTl6pzGs4TGWeKUFUM-PAUhvxItEz62qtMb-LKrQE',
});

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor() {}

  requestPhoto(term: string): Observable<string> {
    return from(unsplash.photos.getRandom({ query: term })).pipe(
      map((result) => {
        const resp = result.response;
        if (resp) {
          const rnd = resp as Random;
          const url = rnd.urls.small;
          console.log({ url });
          return url;
        } else {
          return '/assets/adalbero-f-guimaraes.jpg';
        }
      })
    );
  }
}
