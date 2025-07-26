import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Root component
import { AppComponent } from './app.component';

// Header and Routing
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';

// Recipe Feature Modules
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

// Shopping List Feature Modules
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

// Shared
import { DropdownDirective } from './shared/dropdown.directive';

// Inspiring Recipes (custom feature)
import { InspiringRecipesComponent } from './inspiring-recipes/inspiring-recipes.component';

// Services
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';

@NgModule({
  declarations: [
    // All components and directives declared here
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    InspiringRecipesComponent
  ],
  imports: [
    // Core Angular modules and routing
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // Services available app-wide
    ShoppingListService,
    RecipeService
  ],
  bootstrap: [AppComponent] // Launches the root component
})
export class AppModule { }

