import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importing all the components used in routes
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { InspiringRecipesComponent } from './inspiring-recipes/inspiring-recipes.component';

// Define application routes
const appRoutes: Routes = [
  // Redirect empty path to /recipes
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },

  // All routes under /recipes
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },          // Show initial message or empty view
      { path: 'new', component: RecipeEditComponent },        // Add new recipe form
      { path: ':id', component: RecipeDetailComponent },      // View specific recipe by ID
      { path: ':id/edit', component: RecipeEditComponent }    // Edit recipe by ID
    ]
  },

  // Shopping list page
  { path: 'shopping-list', component: ShoppingListComponent },

  // Inspiring recipes page
  { path: 'inspiring-recipes', component: InspiringRecipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // Configure routes at app root
  exports: [RouterModule]                     // Export RouterModule to make it available app-wide
})
export class AppRoutingModule {}

