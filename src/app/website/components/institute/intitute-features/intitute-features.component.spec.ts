import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntituteFeaturesComponent } from './intitute-features.component';

describe('IntituteFeaturesComponent', () => {
  let component: IntituteFeaturesComponent;
  let fixture: ComponentFixture<IntituteFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntituteFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntituteFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
