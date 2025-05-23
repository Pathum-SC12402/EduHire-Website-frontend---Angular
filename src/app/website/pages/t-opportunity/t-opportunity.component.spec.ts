import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TOpportunityComponent } from './t-opportunity.component';

describe('TOpportunityComponent', () => {
  let component: TOpportunityComponent;
  let fixture: ComponentFixture<TOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TOpportunityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
