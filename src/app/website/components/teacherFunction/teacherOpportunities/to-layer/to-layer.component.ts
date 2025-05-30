import { Component } from '@angular/core';
import { ToDetailsComponent } from "../to-details/to-details.component";
import { ApplicationFormComponent } from "../application-form/application-form.component";

@Component({
  selector: 'app-to-layer',
  imports: [ToDetailsComponent, ApplicationFormComponent],
  templateUrl: './to-layer.component.html',
  styleUrl: './to-layer.component.scss'
})
export class ToLayerComponent {

}
