import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SViewProfileComponent } from './s-view-profile.component';

describe('SViewProfileComponent', () => {
  let component: SViewProfileComponent;
  let fixture: ComponentFixture<SViewProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SViewProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
