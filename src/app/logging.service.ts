import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoggingService {
  log() {
    console.log('I Am A Logging Service');
  }
  constructor() { }
}
