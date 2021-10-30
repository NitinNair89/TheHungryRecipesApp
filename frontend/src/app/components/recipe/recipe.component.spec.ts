import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RecipeComponent } from './recipe.component';
import { AppService } from 'src/app/services/app.service';
import { of } from 'rxjs';

describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;

  let appServiceSpy: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AppService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'RECIPE_ID'
              }
            }
          },
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;

    appServiceSpy = TestBed.inject(AppService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve the recipe when the component is loaded', () => {
    // prepare
    const mockedRecipe = {
      meals: [
        {
          strMealThumb: 'thumb',
          strMeal: 'meal',
          strCategory: 'category',
          strInstructions: 'instructions',
          strYoutube: 'youtube',
          strIngredient1: 'ingredient1',
          strMeasure1: 'measure1',
          strIngredient2: 'ingredient2',
        }
      ]
    }
    spyOn(appServiceSpy, 'getRecipe').and.returnValue(of(mockedRecipe));
    spyOn(appServiceSpy, 'storeSingleRecipe');

    // exec
    fixture.detectChanges();

    // check
    expect(appServiceSpy.getRecipe).toHaveBeenCalledWith('RECIPE_ID');
    expect(component.recipeThumb).toBe('thumb');
    expect(component.recipeName).toBe('meal');
    expect(component.recipeCategory).toBe('category');
    expect(component.recipeInstructions).toBe('instructions');
    expect(component.recipeYoutubeLink).toBe('youtube');
    expect(component.recipeIngredients[0]).toBe('ingredient1 - measure1');
    expect(component.recipeIngredients[1]).toBe('ingredient2');
    expect(appServiceSpy.storeSingleRecipe).toHaveBeenCalledWith(mockedRecipe.meals[0]);
  });
});
