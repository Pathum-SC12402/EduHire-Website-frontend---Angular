import { Component } from '@angular/core';
import { TeacherIntroComponent } from "../../components/teacher/teacher-intro/teacher-intro.component";
import { TeacherCardsComponent } from "../../components/teacher/teacher-cards/teacher-cards.component";
import { TeacherFeaturesComponent } from "../../components/teacher/teacher-features/teacher-features.component";
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher',
  imports: [TeacherIntroComponent, TeacherCardsComponent, TeacherFeaturesComponent, RouterOutlet, CommonModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {
  constructor(public router: Router) {}

  isRootTeacherRoute(): boolean {
    return this.router.url === '/teachers';
  }
}
