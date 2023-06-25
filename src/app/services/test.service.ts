import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  getConsoleLog() {
    console.log("This is log service !!!!")
  }
}
