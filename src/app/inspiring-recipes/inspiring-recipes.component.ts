import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../services/spoonacular.service'; // Service for fetching recipe data

@Component({
  selector: 'app-inspiring-recipes', // Used as <app-inspiring-recipes> in templates
  templateUrl: './inspiring-recipes.component.html',
  styleUrls: ['./inspiring-recipes.component.css']
})
export class InspiringRecipesComponent implements OnInit {
  // 🧾 Default ingredient keywords to search for recipes
  ingredients: string = 'apples,flour,sugar';

  // 📦 This array will hold the fetched recipe data
  recipes: any[] = [];

  // 🧠 Inject SpoonacularService to use its API methods
  constructor(private spoonService: SpoonacularService) {}

  // 🔁 Automatically called when the component loads
  ngOnInit() {
    this.searchRecipes(); // 🔥 Load recipes as soon as the component initializes
  }

  // 🔍 Called when user clicks "Search" button or onInit
  searchRecipes() {
    // 🔽 Fetch recipes from the service
    this.spoonService.getRecipes().subscribe({
      next: (data) => {
        this.recipes = data; // Save the fetched data to display in the UI
        console.log("Fetched recipes:", data); // Debug log
      },
      error: (err) => {
        console.error("Error fetching recipes:", err); // Error handling
      }
    });
  }
}
