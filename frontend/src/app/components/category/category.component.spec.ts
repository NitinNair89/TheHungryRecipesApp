import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppService } from 'src/app/services/app.service';

import { CategoryComponent } from './category.component';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  let appServiceSpy: AppService;

  const MEAL_MOCK = {
    idMeal: '52805',
    strMeal: 'Lamb Biryani',
    strDrinkAlternate: null,
    strCategory: 'Lamb',
    strArea: 'Indian',
    strInstructions: 'Grind the cashew, poppy seeds and cumin seeds into a smooth paste, using as little water as possible.',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg',
    strTags: 'Curry,Meat',
    strYoutube: 'https://www.youtube.com/watch?v=r7SYVSG5nxo',
    strIngredient1: 'Cashew nuts',
    strMeasure1: '12',
    strSource: 'http://www.relishthebite.com/restaurant-style-lamb-biryani/',
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'CATEGORY_NAME',
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;

    appServiceSpy = TestBed.inject(AppService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load recipes by category when the page is loaded', () => {
    // prepare
    const mockedMealResponse = {
      meals: [ MEAL_MOCK ],
    };
    spyOn(appServiceSpy, 'getRecipesByCategory').and.returnValue(of(mockedMealResponse));
    spyOn(appServiceSpy, 'setRecipesByCategory');

    // exec
    fixture.detectChanges();

    // check
    expect(component.categoryName).toBe('CATEGORY_NAME');
    expect(appServiceSpy.getRecipesByCategory).toHaveBeenCalledWith('CATEGORY_NAME');
    expect(component.recipesBySpecificCategory.length).toBe(1);
    expect(component.recipesBySpecificCategory[0]).toEqual(MEAL_MOCK);
    expect(appServiceSpy.setRecipesByCategory).toHaveBeenCalledWith([MEAL_MOCK]);
  });

  it('should load category info when the page is loaded', () => {
    // prepare
    const mockedCategoryDataResponse = {
      strCategoryThumb: 'strCategoryThumb',
      strCategoryDescription: 'strCategoryDescription'
    };
    spyOn(appServiceSpy, 'getCategoryData').and.returnValue(mockedCategoryDataResponse);

    // exec
    fixture.detectChanges();

    // check
    expect(appServiceSpy.getCategoryData).toHaveBeenCalledWith('CATEGORY_NAME');
    expect(component.categoryInfo).toEqual(mockedCategoryDataResponse);
  });
});
