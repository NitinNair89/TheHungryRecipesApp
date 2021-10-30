import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { Meal } from 'src/app/shared/models/meal.model';

import { RandomrecipeComponent } from './randomrecipe.component';

describe('RandomrecipeComponent', () => {
  let component: RandomrecipeComponent;
  let fixture: ComponentFixture<RandomrecipeComponent>;

  let appServiceSpy: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomrecipeComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AppService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomrecipeComponent);
    component = fixture.componentInstance;

    appServiceSpy = TestBed.inject(AppService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch random recipe data when the component is loaded', () => {
    // prepare
    const mockedMeal: Meal = {
      thumb: 'thumb',
      name: 'name',
      youtubeLink: 'youtubeLink',
      instructions: 'instructions',
      ingredients: ['Lettuce', 'Tomato - 5']
    };
    spyOn(appServiceSpy, 'getRandomMeal').and.returnValue(of(mockedMeal));

    // exec
    fixture.detectChanges();

    // check
    expect(component.meal).toEqual(mockedMeal);
    expect(appServiceSpy.getRandomMeal).toHaveBeenCalled();
  });

  it('should fetch random recipe data when it is triggered by the UI', () => {
    // prepare
    const mockedMeal: Meal = {
      thumb: 'thumb',
      name: 'name',
      youtubeLink: 'youtubeLink',
      instructions: 'instructions',
      ingredients: ['Lettuce', 'Tomato - 5']
    };
    spyOn(appServiceSpy, 'getRandomMeal').and.returnValue(of(mockedMeal));

    // exec
    component.fetchRandomRecipe();

    // check
    expect(component.meal).toEqual(mockedMeal);
    expect(appServiceSpy.getRandomMeal).toHaveBeenCalled();
  });
});
