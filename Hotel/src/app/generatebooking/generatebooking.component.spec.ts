import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratebookingComponent } from './generatebooking.component';

describe('GeneratebookingComponent', () => {
  let component: GeneratebookingComponent;
  let fixture: ComponentFixture<GeneratebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratebookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
