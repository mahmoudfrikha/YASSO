import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCreditSimulationCardComponent } from './professional-credit-simulation-card.component';

describe('ProfessionalCreditSimulationCardComponent', () => {
  let component: ProfessionalCreditSimulationCardComponent;
  let fixture: ComponentFixture<ProfessionalCreditSimulationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalCreditSimulationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalCreditSimulationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
