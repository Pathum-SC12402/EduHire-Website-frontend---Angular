import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpUpdateComponent } from './tp-update.component';

describe('TpUpdateComponent', () => {
  let component: TpUpdateComponent;
  let fixture: ComponentFixture<TpUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
