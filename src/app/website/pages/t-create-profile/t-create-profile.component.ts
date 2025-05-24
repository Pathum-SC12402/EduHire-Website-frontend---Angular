import { Component } from '@angular/core';
import { SignupComponent } from "../../components/auth/signup/signup.component";
import { VerificationComponent } from "../../components/auth/verification/verification.component";
import { Router } from '@angular/router';
import { TpLayoutComponent } from "../../components/teacherFunction/teacherCreateProfile/tp-layout/tp-layout.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-t-create-profile',
  imports: [SignupComponent, VerificationComponent, TpLayoutComponent, CommonModule],
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
