import { Component } from '@angular/core';
import { TvIntroComponent } from "../tv-intro/tv-intro.component";
import { TvProfileComponent } from "../tv-profile/tv-profile.component";

@Component({
  selector: 'app-tv-layout',
  imports: [TvIntroComponent, TvProfileComponent],
  templateUrl: './tv-layout.component.html',
  styleUrl: './tv-layout.component.scss'
})
export class TvLayoutComponent {

}
