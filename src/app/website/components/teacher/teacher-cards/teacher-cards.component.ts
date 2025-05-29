import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-teacher-cards',
  imports: [],
  templateUrl: './teacher-cards.component.html',
  styleUrl: './teacher-cards.component.scss'
})
export class TeacherCardsComponent {
  constructor(private router: Router, private cookieService: CookieService) { }

  moveToCreateProfile() {
    this.router.navigateByUrl('/teachers/signup');
    this.cookieService.set('pageId', '1', 1);
  }
  moveToViewProfile() {
    this.cookieService.set('pageId', '2', 1);
    this.router.navigateByUrl('/teachers/signin');
  }
  moveToOpportunityPage() {
    this.cookieService.set('pageId', '3', 1);
    this.router.navigateByUrl('/teachers/signin');
  } 
}
