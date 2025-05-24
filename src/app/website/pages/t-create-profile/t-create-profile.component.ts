import { Component } from '@angular/core';
import { SignupComponent } from "../../components/auth/signup/signup.component";
import { VerificationComponent } from "../../components/auth/verification/verification.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TpIntroComponent } from "../../components/teacherFunction/teacherCreateProfile/tp-intro/tp-intro.component";
import { TpFormComponent } from "../../components/teacherFunction/teacherCreateProfile/tp-form/tp-form.component";

@Component({
  selector: 'app-t-create-profile',
  imports: [SignupComponent, VerificationComponent, CommonModule, TpIntroComponent, TpFormComponent],
  templateUrl: './t-create-profile.component.html',
  styleUrl: './t-create-profile.component.scss'
})
export class TCreateProfileComponent {
  constructor(public router: Router) {}

  isSignupRoute(): boolean {
    return this.router.url === '/teachers/signup';
  }
  isVerificationRoute(): boolean {
    return this.router.url === '/teachers/verify-email';
  }
  isCreateProfileRoute(): boolean {
    return this.router.url === '/teachers/create-profile';
  }
}
