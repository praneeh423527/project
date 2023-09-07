import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpticketbyidComponent } from './helpticketbyid.component';

describe('HelpticketbyidComponent', () => {
  let component: HelpticketbyidComponent;
  let fixture: ComponentFixture<HelpticketbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpticketbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpticketbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
