import { Component } from '@angular/core';
import { IpIntroComponent } from "../ip-intro/ip-intro.component";
import { IpFormComponent } from "../ip-form/ip-form.component";

@Component({
  selector: 'app-ip-layout',
  imports: [IpIntroComponent, IpFormComponent],
  templateUrl: './ip-layout.component.html',
  styleUrl: './ip-layout.component.scss'
})
export class IpLayoutComponent {

}
