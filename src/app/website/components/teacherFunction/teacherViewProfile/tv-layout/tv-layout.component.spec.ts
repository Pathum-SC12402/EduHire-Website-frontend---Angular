import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvLayoutComponent } from './tv-layout.component';

describe('TvLayoutComponent', () => {
  let component: TvLayoutComponent;
  let fixture: ComponentFixture<TvLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
