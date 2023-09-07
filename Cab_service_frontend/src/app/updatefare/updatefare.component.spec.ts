import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefareComponent } from './updatefare.component';

describe('UpdatefareComponent', () => {
  let component: UpdatefareComponent;
  let fixture: ComponentFixture<UpdatefareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatefareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
