import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit, DoCheck, AfterContentInit, AfterViewChecked, AfterContentChecked {
  
  @Input() name !: String;

  constructor() {
    console.log("constructor !");
  }
  ngDoCheck(): void {
    
  }

  ngOnInit(): void {
    console.log("On init run !");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Ng change")
  }
  ngOnDestroy(): void {
    console.log("On destroy run !");
  }
  ngAfterViewInit(): void {
    console.log("On after view init run !");
  }
  ngAfterContentInit(): void {
    console.log("On content innit run !");
  }
  ngAfterViewChecked(): void {
    console.log("On view checked run !");
  }
  ngAfterContentChecked(): void {
    console.log("On content checked run !");
  }

  title = 'angular-learning';
  age = 22;
  clickMe() {
    console.log("clicked !!!")
  }

  currentDate = new Date;
}
