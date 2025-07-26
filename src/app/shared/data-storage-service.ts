import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable({ providedIn: 'root' }) // Makes the service available app-wide
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}

  // Store current recipes in Firebase
  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http
      .put('https://nuitry-freeze-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
        console.log("Recipes saved:", response);
      });
  }

  // Fetch recipes from Firebase and update the app's recipe list
  fetchRecipes() {
    this.http
      .get<Recipe[]>('https://nuitry-freeze-default-rtdb.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          return recipes.map(recipe => ({
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          }));
        })
      )
      .subscribe(recipes => {
        this.recipesService.setRecipes(recipes);
      });
  }
}
