import {RouterModule, Routes} from "@angular/router";
import {ReceipesComponent} from "./receipes/receipes.component";
import {ShoppingListComponent} from "./receipes/shopping-list/shopping-list.component";
import {RECIPE_ROUTES} from "./receipes/recipes.routes";

export const APP_ROUTES_PROVIDERS = RouterModule.forRoot([
  { path: '', redirectTo: '/recipes', pathMatch:'full' },
  // { path: 'recipes', component: ReceipesComponent },
  { path: 'recipes', component: ReceipesComponent, children: RECIPE_ROUTES },
  { path: 'shopping-list', component: ShoppingListComponent }
]);

