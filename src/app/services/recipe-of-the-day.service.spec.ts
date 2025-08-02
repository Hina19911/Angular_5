import { TestBed } from '@angular/core/testing';

import { RecipeOfTheDayService } from './recipe-of-the-day.service';

describe('RecipeOfTheDayService', () => {
  let service: RecipeOfTheDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeOfTheDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
