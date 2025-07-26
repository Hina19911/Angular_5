import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe; // Will hold the selected recipe details
  id: number;     // Will store the index/id from the route

  constructor(
    private recipeService: RecipeService, // Service to get and modify recipes
    private route: ActivatedRoute,        // Helps read route parameters (e.g. id)
    private router: Router                // Helps navigate programmatically
  ) {}

  ngOnInit() {
    // ⏳ Subscribe to route param changes
    this.route.params.subscribe((params: Params) => {
      // Convert route param 'id' from string to number using +
      this.id = +params['id'];

      console.log("Route changed! New ID:", this.id); // for debugging

      // Get the recipe based on ID using the RecipeService
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  // 🛒 Add this recipe's ingredients to the shopping list
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  // ✏️ Navigate to edit view for this recipe
  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route }); 
    // Alternatively:
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  // 🗑️ Delete this recipe and redirect back to /recipes
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']); // After deletion, return to recipe list
  }
}

