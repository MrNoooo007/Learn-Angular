import { Component, OnInit } from '@angular/core';
import {TestService} from "../services/test.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private testService: TestService) {
    console.log(this.testService)
  }

  ngOnInit() {
  }

}
