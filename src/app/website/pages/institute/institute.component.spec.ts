import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteComponent } from './institute.component';

describe('InstituteComponent', () => {
  let component: InstituteComponent;
  let fixture: ComponentFixture<InstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstituteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
