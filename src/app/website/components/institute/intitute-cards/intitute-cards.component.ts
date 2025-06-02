import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-intitute-cards',
  imports: [],
  templateUrl: './intitute-cards.component.html',
  styleUrl: './intitute-cards.component.scss'
})
export class IntituteCardsComponent {
  constructor(private router: Router, private cookieService: CookieService) { }
  moveToCreateInstitutionProfile(){
    this.router.navigateByUrl('/institution/signup');
    this.cookieService.set('pageId', '4', 1);
    console.log('Page ID set to 4 for institution signup');
  }
  moveToViewInstitutionProfile(){
    this.router.navigateByUrl('/institution/signin');
    this.cookieService.set('pageId', '5', 1);
  }
  moveToViewApplications(){
    this.router.navigateByUrl('/institution/signin');
    this.cookieService.set('pageId', '6', 1);
  }
}
