import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  constructor(private router: Router) { }
  moveToTeacherPage(){
    this.router.navigateByUrl('teachers');
  }
  moveToSchoolPage(){
    this.router.navigateByUrl('institution');
  }
}
