import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TestService} from "../services/test.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnChanges, OnInit {
  constructor (private testService: TestService) {
    console.log("in constructor")
    console.log(this.testService)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("On Change")
  }

  ngOnInit(): void {
    console.log("On init")
  }

}
