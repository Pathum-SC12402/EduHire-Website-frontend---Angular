import { Component } from '@angular/core';
import { TvIntroComponent } from "../../components/teacherFunction/teacherViewProfile/tv-intro/tv-intro.component";
import { TvLayoutComponent } from "../../components/teacherFunction/teacherViewProfile/tv-layout/tv-layout.component";

@Component({
  selector: 'app-t-view-profile',
  imports: [TvLayoutComponent],
  templateUrl: './t-view-profile.component.html',
  styleUrl: './t-view-profile.component.scss'
})
export class TViewProfileComponent {

}
