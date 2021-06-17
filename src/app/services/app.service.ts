import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  src$: EventEmitter<string> = new EventEmitter();
  
  constructor() { }
}
