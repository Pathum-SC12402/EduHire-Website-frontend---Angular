import { Component } from '@angular/core';
import { IntituteIntroComponent } from "../../components/institute/intitute-intro/intitute-intro.component";
import { IntituteCardsComponent } from "../../components/institute/intitute-cards/intitute-cards.component";
import { IntituteFeaturesComponent } from "../../components/institute/intitute-features/intitute-features.component";

@Component({
  selector: 'app-institute',
  imports: [IntituteIntroComponent, IntituteCardsComponent, IntituteFeaturesComponent],
  templateUrl: './institute.component.html',
  styleUrl: './institute.component.scss'
})
export class InstituteComponent {

}
