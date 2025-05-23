import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpIntroComponent } from './tp-intro.component';

describe('TpIntroComponent', () => {
  let component: TpIntroComponent;
  let fixture: ComponentFixture<TpIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
