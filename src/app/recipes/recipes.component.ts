import { Component, OnInit } from '@angular/core';
import { RecipeOfTheDayService } from '../services/recipe-of-the-day.service';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeOfTheDay: any;

  constructor(private recipeService: RecipeOfTheDayService) { }

  ngOnInit() {
    this.recipeService.getRecipe().subscribe(data => {
      this.recipeOfTheDay = data.meals[0];
    });
  }
 
}
