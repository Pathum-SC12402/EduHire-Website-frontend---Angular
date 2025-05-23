import { Component } from '@angular/core';
import { TpIntroComponent } from "../../components/teacherFunction/teacherCreateProfile/tp-intro/tp-intro.component";
import { TpFormComponent } from "../../components/teacherFunction/teacherCreateProfile/tp-form/tp-form.component";

@Component({
  selector: 'app-t-create-profile',
  imports: [TpIntroComponent, TpFormComponent],
  templateUrl: './t-create-profile.component.html',
  styleUrl: './t-create-profile.component.scss'
})
export class TCreateProfileComponent {

}
