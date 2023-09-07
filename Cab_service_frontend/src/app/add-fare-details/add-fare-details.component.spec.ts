import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFareDetailsComponent } from './add-fare-details.component';

describe('AddFareDetailsComponent', () => {
  let component: AddFareDetailsComponent;
  let fixture: ComponentFixture<AddFareDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFareDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFareDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
