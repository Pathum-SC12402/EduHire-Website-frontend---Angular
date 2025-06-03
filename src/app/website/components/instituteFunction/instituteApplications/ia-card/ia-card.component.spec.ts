import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaCardComponent } from './ia-card.component';

describe('IaCardComponent', () => {
  let component: IaCardComponent;
  let fixture: ComponentFixture<IaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
