import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetrentalookingdetailsbyidComponent } from './getrentalookingdetailsbyid.component';

describe('GetrentalookingdetailsbyidComponent', () => {
  let component: GetrentalookingdetailsbyidComponent;
  let fixture: ComponentFixture<GetrentalookingdetailsbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetrentalookingdetailsbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetrentalookingdetailsbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
