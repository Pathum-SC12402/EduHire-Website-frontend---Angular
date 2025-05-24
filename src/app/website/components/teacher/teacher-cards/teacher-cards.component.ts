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
    // Logic to navigate to the view profile page
  }
  moveToOpportunityPage() {
    // Logic to navigate to the opportunity page
  } 
}
