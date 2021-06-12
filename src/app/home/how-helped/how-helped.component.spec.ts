import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowHelpedComponent } from './how-helped.component';

describe('HowHelpedComponent', () => {
  let component: HowHelpedComponent;
  let fixture: ComponentFixture<HowHelpedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowHelpedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowHelpedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
