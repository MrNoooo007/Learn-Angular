import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    {
      id: 1,
      name: "Cong Dat 1"
    },
    {
      id: 2,
      name: "Cong Dat 2"
    },
    {
      id: 3,
      name: "Cong Dat 3"
    },
    {
      id: 4,
      name: "Cong Dat 4"
    },
  ]
}
