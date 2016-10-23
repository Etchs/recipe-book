import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { RecipeListComponent } from './receipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './receipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './receipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './receipes/shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './receipes/shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import { ShoppingListService } from "./receipes/shopping-list/shopping-list.service";
import { APP_ROUTES_PROVIDERS } from "./app.routes";
import { RecipeStartComponent } from './receipes/recipe-start.component';
import { RecipeEditComponent } from './receipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES_PROVIDERS
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
