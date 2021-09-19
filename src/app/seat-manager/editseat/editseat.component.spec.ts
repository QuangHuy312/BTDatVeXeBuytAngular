import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditseatComponent } from './editseat.component';

describe('EditseatComponent', () => {
  let component: EditseatComponent;
  let fixture: ComponentFixture<EditseatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditseatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
