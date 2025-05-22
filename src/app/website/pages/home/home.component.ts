import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/home/navbar/navbar.component';
import { IntroductionComponent } from "../../components/home/introduction/introduction.component";
import { CardsComponent } from "../../components/home/cards/cards.component";
import { FeaturesComponent } from "../../components/home/features/features.component";
import { FooterComponent } from "../../components/home/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, IntroductionComponent, CardsComponent, FeaturesComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
