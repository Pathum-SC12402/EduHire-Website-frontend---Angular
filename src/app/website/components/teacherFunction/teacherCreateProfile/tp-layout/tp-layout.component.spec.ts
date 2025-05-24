import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpLayoutComponent } from './tp-layout.component';

describe('TpLayoutComponent', () => {
  let component: TpLayoutComponent;
  let fixture: ComponentFixture<TpLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
