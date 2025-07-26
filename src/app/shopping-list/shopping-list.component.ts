import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  // List of ingredients to display
  ingredients: Ingredient[];

  // Subscription to keep track of updates from the service
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    // Get the initial list of ingredients from the service
    this.ingredients = this.slService.getIngredients();

    // Subscribe to any changes in the ingredient list (e.g. additions/deletions)
    this.subscription = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  // Called when a user clicks an ingredient to edit it
  onEditItem(index: number) {
    this.slService.startedEditing.next(index); // Notify the edit form which item to load
  }

  // Cleanup subscription to avoid memory leaks
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
