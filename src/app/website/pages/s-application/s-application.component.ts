import { Component } from '@angular/core';
import { IaCardComponent } from "../../components/instituteFunction/instituteApplications/ia-card/ia-card.component";
import { SubNavbarComponent } from "../../components/sub/sub-navbar/sub-navbar.component";
import { FooterComponent } from "../../components/home/footer/footer.component";

@Component({
  selector: 'app-s-application',
  imports: [IaCardComponent, SubNavbarComponent, FooterComponent],
  templateUrl: './s-application.component.html',
  styleUrl: './s-application.component.scss'
})
export class SApplicationComponent {

}
