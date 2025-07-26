// Core Angular and Reactive Forms imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'; // For route handling
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'; // For building dynamic forms

// Service that manages recipes
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number; // holds the ID (index) of the recipe being edited
  editMode = false; // tells if you're editing an existing recipe or adding a new one
  recipeForm: FormGroup; // the reactive form instance

  // 👇 A getter to easily access all FormGroups inside the ingredients FormArray
  get recipeControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  constructor(
    private route: ActivatedRoute, // helps read route parameters (e.g., recipe ID)
    private recipeService: RecipeService, // connects to recipe logic
    private router: Router // lets you navigate programmatically
  ) {}

  // ✔ Runs when component initializes
  ngOnInit() {
    // ⏩ Watch for route parameter changes
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']; // convert 'id' from string to number
      this.editMode = params['id'] != null; // if there's an ID, we're editing; otherwise, adding
      this.initForm(); // 🛠 set up the form controls
    });
  }

  // 📤 When form is submitted
  onSubmit() {
    // Optionally: you could create a new Recipe object from form values
    // If editing, update the recipe
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      // If creating a new one
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel(); // After saving, return to the list
  }

  // ➕ Adds a new ingredient input field
  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required), // name input
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/) // positive number only
        ])
      })
    );
  }

  // ❌ Removes an ingredient input at the specified index
  onDeleteIngredient(index: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  // 🚪 Cancels the form and navigates one level up in route
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  // 🧠 Initializes the form fields (blank if new, pre-filled if editing)
  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    // 🧠 Pre-fill if in edit mode
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      // Loop over ingredients and push form controls for each
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    // 🏗 Build the form structure
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }
}
