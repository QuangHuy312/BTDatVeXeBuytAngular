import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatListComponent } from './seatlist.component';

describe('SeatListComponent', () => {
  let component: SeatListComponent;
  let fixture: ComponentFixture<SeatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeatListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
