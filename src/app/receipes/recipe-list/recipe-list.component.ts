import {Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Recipe } from './recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg', []),
    new Recipe('Dummy2', 'Dummy2', 'http://www.sesdweb.net/cms/lib06/PA01000019/Centricity/Domain/267/recipe.gif', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
