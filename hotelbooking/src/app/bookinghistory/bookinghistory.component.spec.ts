import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinghistoryComponent } from './bookinghistory.component';

describe('BookinghistoryComponent', () => {
  let component: BookinghistoryComponent;
  let fixture: ComponentFixture<BookinghistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookinghistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookinghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
