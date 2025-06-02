import { Component } from '@angular/core';
import { IvIntroComponent } from "../iv-intro/iv-intro.component";
import { IvProfileComponent } from "../iv-profile/iv-profile.component";

@Component({
  selector: 'app-iv-layout',
  imports: [IvIntroComponent, IvProfileComponent],
  templateUrl: './iv-layout.component.html',
  styleUrl: './iv-layout.component.scss'
})
export class IvLayoutComponent {

}
