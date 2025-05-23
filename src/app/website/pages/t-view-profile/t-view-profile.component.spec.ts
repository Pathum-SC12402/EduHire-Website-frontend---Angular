import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TViewProfileComponent } from './t-view-profile.component';

describe('TViewProfileComponent', () => {
  let component: TViewProfileComponent;
  let fixture: ComponentFixture<TViewProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TViewProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
