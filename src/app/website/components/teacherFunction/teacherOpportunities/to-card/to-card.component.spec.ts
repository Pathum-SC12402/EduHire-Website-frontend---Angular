import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToCardComponent } from './to-card.component';

describe('ToCardComponent', () => {
  let component: ToCardComponent;
  let fixture: ComponentFixture<ToCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
