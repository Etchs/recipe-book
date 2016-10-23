import { Injectable } from '@angular/core';
import {Recipe} from "./recipe-list/recipe";
import {Ingredient} from "../shared/ingredient";
import * as _ from 'lodash';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(1, 'Dummy1', 'Description of Dummy1 Recipe', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg', [
      new Ingredient(2, 'sugar', 'tea spoons'),
      new Ingredient(1, 'Kg', 'meat')
    ]),
    new Recipe(2, 'Dummy2', 'Description of Dummy2 Recipe', 'http://www.sesdweb.net/cms/lib06/PA01000019/Centricity/Domain/267/recipe.gif', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return _.find(this.recipes, function(r) {
      return r.id == id;
    });
  }

  deleteRecipe(id: number) {
    _.remove(this.recipes, function(r) {
      return r.id == id;
    });
    // this.recipes.splice(this.recipes.indexOf(recipe), 1);
    return;
  }
}
