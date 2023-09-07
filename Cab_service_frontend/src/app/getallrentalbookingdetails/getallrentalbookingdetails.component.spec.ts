import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallrentalbookingdetailsComponent } from './getallrentalbookingdetails.component';

describe('GetallrentalbookingdetailsComponent', () => {
  let component: GetallrentalbookingdetailsComponent;
  let fixture: ComponentFixture<GetallrentalbookingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallrentalbookingdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallrentalbookingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
