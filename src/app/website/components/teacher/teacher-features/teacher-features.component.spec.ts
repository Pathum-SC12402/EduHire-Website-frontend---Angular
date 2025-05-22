import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFeaturesComponent } from './teacher-features.component';

describe('TeacherFeaturesComponent', () => {
  let component: TeacherFeaturesComponent;
  let fixture: ComponentFixture<TeacherFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
