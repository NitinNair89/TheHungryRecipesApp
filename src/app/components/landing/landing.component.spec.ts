import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { MatIconModule } from '@angular/material/icon';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule
      ],
      declarations: [ LandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
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
});
