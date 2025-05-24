import { Component } from '@angular/core';
import { TpIntroComponent } from "../tp-intro/tp-intro.component";
import { TpFormComponent } from "../tp-form/tp-form.component";

@Component({
  selector: 'app-tp-layout',
  imports: [TpIntroComponent, TpFormComponent],
  templateUrl: './tp-layout.component.html',
  styleUrl: './tp-layout.component.scss'
})
export class TpLayoutComponent {

}
