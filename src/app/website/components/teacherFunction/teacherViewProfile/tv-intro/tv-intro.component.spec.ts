import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvIntroComponent } from './tv-intro.component';

describe('TvIntroComponent', () => {
  let component: TvIntroComponent;
  let fixture: ComponentFixture<TvIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
