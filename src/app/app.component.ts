import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learning';
  name = 'Cong Dat';
  age = 18;
  increaseAge() {
    this.age++;
  }
  decreaseAge() {
    this.age--;
  }
}
