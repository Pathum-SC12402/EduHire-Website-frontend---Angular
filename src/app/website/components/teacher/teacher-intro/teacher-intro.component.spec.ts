import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherIntroComponent } from './teacher-intro.component';

describe('TeacherIntroComponent', () => {
  let component: TeacherIntroComponent;
  let fixture: ComponentFixture<TeacherIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
