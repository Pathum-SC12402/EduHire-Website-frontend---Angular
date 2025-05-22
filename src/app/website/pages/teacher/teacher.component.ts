import { Component } from '@angular/core';
import { TeacherIntroComponent } from "../../components/teacher/teacher-intro/teacher-intro.component";
import { TeacherCardsComponent } from "../../components/teacher/teacher-cards/teacher-cards.component";
import { TeacherFeaturesComponent } from "../../components/teacher/teacher-features/teacher-features.component";

@Component({
  selector: 'app-teacher',
  imports: [TeacherIntroComponent, TeacherCardsComponent, TeacherFeaturesComponent],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {

}
