import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderhotelComponent } from './headerhotel.component';

describe('HeaderhotelComponent', () => {
  let component: HeaderhotelComponent;
  let fixture: ComponentFixture<HeaderhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderhotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
