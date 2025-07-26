import { Component } from '@angular/core';
import { SpoonacularService } from '../services/spoonacular.service'; // Service for fetching recipe data

@Component({
  selector: 'app-inspiring-recipes', //  Used as <app-inspiring-recipes> in templates
  templateUrl: './inspiring-recipes.component.html',
  styleUrls: ['./inspiring-recipes.component.css']
})
export class InspiringRecipesComponent {
  //  Default ingredient keywords to search for recipes
  ingredients: string = 'apples,flour,sugar';

  // 📦 This array will hold the fetched recipe data
  recipes: any[] = [];

  // 🧠 Inject SpoonacularService to use its API methods
  constructor(private spoonService: SpoonacularService) {}

  // 🔍 Called when user clicks "Search" button
  searchRecipes() {
    // 🔽 Fetch recipes from the service
    this.spoonService.getRecipes().subscribe({
      next: (data) => {
        this.recipes = data; // Save the fetched data to display in the UI
        console.log("Fetched recipes:", data); // Debug log
      },
      error: (err) => {
        console.error("Error fetching recipes:", err); //  Error handling
      }
    });
  }
}
