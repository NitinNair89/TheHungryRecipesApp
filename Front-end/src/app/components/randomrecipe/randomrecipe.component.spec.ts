import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomrecipeComponent } from './randomrecipe.component';

describe('RandomrecipeComponent', () => {
  let component: RandomrecipeComponent;
  let fixture: ComponentFixture<RandomrecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomrecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
