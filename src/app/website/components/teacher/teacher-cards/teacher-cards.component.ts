import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-cards',
  imports: [],
  templateUrl: './teacher-cards.component.html',
  styleUrl: './teacher-cards.component.scss'
})
export class TeacherCardsComponent {
  constructor(private router: Router) { }

  moveToCreateProfile() {
    this.router.navigateByUrl('/teachers/signup');
  }
  moveToViewProfile() {
    this.router.navigateByUrl('/teachers/signin');
    localStorage.setItem('pageId', '1');
  }
  moveToOpportunityPage() {
    localStorage.setItem('pageId', '2');
  } 
}
