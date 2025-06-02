import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDetailsComponent } from './to-details.component';

describe('ToDetailsComponent', () => {
  let component: ToDetailsComponent;
  let fixture: ComponentFixture<ToDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
