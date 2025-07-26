import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InspiringRecipesComponent } from './inspiring-recipes.component';

// 🔍 Describe the test suite for InspiringRecipesComponent
describe('InspiringRecipesComponent', () => {
  let component: InspiringRecipesComponent; // Reference to the component being tested
  let fixture: ComponentFixture<InspiringRecipesComponent>; // Test environment wrapper

  // 🧪 Setup before each test runs
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspiringRecipesComponent ] // Declare the component in the test module
    })
    .compileComponents(); // Compile HTML + CSS

    // 🏗️ Create a fixture (testable component instance)
    fixture = TestBed.createComponent(InspiringRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger ngOnInit and bindings
  });

  // ✅ Simple test to check if the component was created
  it('should create', () => {
    expect(component).toBeTruthy(); // Passes if component exists
  });
});

