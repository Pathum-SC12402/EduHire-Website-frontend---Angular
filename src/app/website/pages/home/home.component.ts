import { Component } from '@angular/core';
import { IntroductionComponent } from "../../components/home/introduction/introduction.component";
import { CardsComponent } from "../../components/home/cards/cards.component";
import { FeaturesComponent } from "../../components/home/features/features.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [IntroductionComponent, CardsComponent, FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
