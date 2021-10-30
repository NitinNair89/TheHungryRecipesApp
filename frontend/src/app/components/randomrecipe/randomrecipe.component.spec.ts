import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppService } from 'src/app/services/app.service';

import { RandomrecipeComponent } from './randomrecipe.component';

describe('RandomrecipeComponent', () => {
  let component: RandomrecipeComponent;
  let fixture: ComponentFixture<RandomrecipeComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
