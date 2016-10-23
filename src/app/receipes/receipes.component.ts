import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe-list/recipe';
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'rb-receipes',
  templateUrl: './receipes.component.html',
  providers: [RecipeService]
})
export class ReceipesComponent implements OnInit {

  clickedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
