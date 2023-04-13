import {Component, ViewChild} from '@angular/core';
import {ChildComComponent} from "./child-com/child-com.component";
import {ToggleComponent} from "./toggle/toggle.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('toggle') toggle !: ToggleComponent;

  toggleInside() {
    this.toggle.toggle();
  }
}
