import { Component } from '@angular/core';
import { SubNavbarComponent } from "../../components/sub/sub-navbar/sub-navbar.component";
import { ToCardComponent } from "../../components/teacherFunction/teacherOpportunities/to-card/to-card.component";
import { FooterComponent } from "../../components/home/footer/footer.component";

@Component({
  selector: 'app-t-opportunity',
  imports: [SubNavbarComponent, ToCardComponent, FooterComponent],
  templateUrl: './t-opportunity.component.html',
  styleUrl: './t-opportunity.component.scss'
})
export class TOpportunityComponent {

}
