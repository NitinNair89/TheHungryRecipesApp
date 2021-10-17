import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'recipelist', loadChildren: () => import('../../components/recipelist/recipelist.module').then(m => m.RecipelistModule)}
        ]),
        MatIconModule
      ],
      declarations: [ LandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have search recipe button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a.btnSearchRecipe')).toBeTruthy();
  });

  it('should have random recipe button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a.btnRandomRecipe')).toBeTruthy();
  });
  
  it('should have page description', () => {
    let heading = fixture.nativeElement.querySelector('h4');
    expect(heading.textContent).toBeTruthy();
  });
  
  it('should fail when search value is undefined', () => {
    let inputValue = debugElement.query(By.css('input'));
    component.recipeName = undefined;
    inputValue.triggerEventHandler('keyup',component.navigate());
    fixture.detectChanges();
    let errorValue = debugElement.query(By.css('label')).nativeElement.textContent;
    expect(errorValue).toEqual('Please provide a recipe name');
  });

  it('should navigate when search value is valid', () => {
    let inputValue = debugElement.query(By.css('input'));
    component.recipeName = 'BEEF';
    inputValue.triggerEventHandler('keyup',component.navigate());
    fixture.detectChanges();
    let errorElement = debugElement.query(By.css('label'));
    expect(errorElement).toBeNull();
    expect(component.inputError).toEqual(false);
  });
  
});
