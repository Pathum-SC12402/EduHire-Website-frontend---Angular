import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-navbar',
  imports: [],
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.scss']
})
export class SubNavbarComponent {
  constructor(private router: Router) { }
  moveHomePage(){
    this.router.navigateByUrl('/home');
  }
  moveGuidelinePage(){
    this.router.navigateByUrl('/guideline');
  }
  moveAdvertisementPage(){
    this.router.navigateByUrl('/advertisement');
  }
}
