import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This desc test", "https://www.inspiredtaste.net/wp-content/uploads/2022/11/Fluffy-Pancakes-Recipe-Video.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
