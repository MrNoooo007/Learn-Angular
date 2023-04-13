import { Component } from '@angular/core';

@Component({
  selector: 'app-child-com',
  templateUrl: './child-com.component.html',
  styleUrls: ['./child-com.component.css']
})
export class ChildComComponent {
  clickMe() {
    console.log("Hello I am a child !!!")
  }
}
