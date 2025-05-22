import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
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
