import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvProfileComponent } from './tv-profile.component';

describe('TvProfileComponent', () => {
  let component: TvProfileComponent;
  let fixture: ComponentFixture<TvProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
