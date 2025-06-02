import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToLayerComponent } from './to-layer.component';

describe('ToLayerComponent', () => {
  let component: ToLayerComponent;
  let fixture: ComponentFixture<ToLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToLayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
