import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  constructor(private router: Router, private cookieService: CookieService) { }
  onLogin(formData: { email: string; password: string }) {
    const id = this.cookieService.get('pageId');
    if(id == '2' && formData.email=='t' && formData.password=='t') {
      console.log('Login successful');
      this.router.navigateByUrl('/teachers/view-profile');
    }else if(id == '3' && formData.email=='t' && formData.password=='t') {
      console.log('Login successful');
      this.router.navigateByUrl('teacher-opportunity');
    }else if(id == '5' && formData.email=='t' && formData.password=='t') {
      console.log('Login successful');
      this.router.navigateByUrl('/institution/view-profile');
    }else if(id == '6' && formData.email=='t' && formData.password=='t') {
      console.log('Login successful');
      this.router.navigateByUrl('applications');
    }
  }
  navigateToSignup() {
    this.router.navigateByUrl('/teachers/signup');
  }
}
