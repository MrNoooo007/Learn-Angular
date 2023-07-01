import { Component } from '@angular/core';
import {delay, filter, forkJoin, from, fromEvent, map, Observable, of, pluck} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _a: Observable<any> = from([1,2,3,4]);

  constructor() {
    this._a.pipe(
      filter(x => x % 2 != 0)
    ).subscribe((data) => console.log(data))

    forkJoin(
      of("Hello 1").pipe(delay(1000)),
      of("Hello 2").pipe(delay(1000)),
      of("Hello 3").pipe(delay(10000))
    ).subscribe((data) => console.log(data))
  }
}
