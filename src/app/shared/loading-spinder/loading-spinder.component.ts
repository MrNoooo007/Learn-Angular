import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinder',
  templateUrl: './loading-spinder.component.html',
  styleUrls: ['./loading-spinder.component.css']
})
export class LoadingSpinderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Is loading !!!")
  }

}
