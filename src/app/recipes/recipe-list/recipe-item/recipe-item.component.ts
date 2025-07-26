import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;  // Receives recipe data from parent component
  @Input() index: number;   // Used for routing to recipe detail

  ngOnInit() {
    // Component initialization logic (currently unused)
  }
}

