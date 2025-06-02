import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SApplicationComponent } from './s-application.component';

describe('SApplicationComponent', () => {
  let component: SApplicationComponent;
  let fixture: ComponentFixture<SApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
