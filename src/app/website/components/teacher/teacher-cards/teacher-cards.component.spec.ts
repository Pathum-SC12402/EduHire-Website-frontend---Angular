import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCardsComponent } from './teacher-cards.component';

describe('TeacherCardsComponent', () => {
  let component: TeacherCardsComponent;
  let fixture: ComponentFixture<TeacherCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
