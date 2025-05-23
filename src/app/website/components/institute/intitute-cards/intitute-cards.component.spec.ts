import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntituteCardsComponent } from './intitute-cards.component';

describe('IntituteCardsComponent', () => {
  let component: IntituteCardsComponent;
  let fixture: ComponentFixture<IntituteCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntituteCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntituteCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
