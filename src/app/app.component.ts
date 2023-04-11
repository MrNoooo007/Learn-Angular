import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learning';
  name = 'Cong Dat';
  age = 22;
  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'David',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    {
      id: 3,
      firstName: 'Priscella 2',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    {
      id: 4,
      firstName: 'Priscella 1',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu.vn',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    // more data
  ];
}
