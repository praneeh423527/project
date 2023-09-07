import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalbookingdetailsComponent } from './rentalbookingdetails.component';

describe('RentalbookingdetailsComponent', () => {
  let component: RentalbookingdetailsComponent;
  let fixture: ComponentFixture<RentalbookingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalbookingdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalbookingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
