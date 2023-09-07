import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecarsComponent } from './updatecars.component';

describe('UpdatecarsComponent', () => {
  let component: UpdatecarsComponent;
  let fixture: ComponentFixture<UpdatecarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
