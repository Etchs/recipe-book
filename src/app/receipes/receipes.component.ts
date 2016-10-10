import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe-list/recipe';

@Component({
  selector: 'rb-receipes',
  templateUrl: './receipes.component.html'
})
export class ReceipesComponent implements OnInit {

  clickedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
