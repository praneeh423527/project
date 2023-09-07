import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpticketComponent } from './helpticket.component';

describe('HelpticketComponent', () => {
  let component: HelpticketComponent;
  let fixture: ComponentFixture<HelpticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
