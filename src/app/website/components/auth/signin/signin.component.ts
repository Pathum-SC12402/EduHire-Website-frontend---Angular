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
    }
    if(id == '3' && formData.email=='t' && formData.password=='t') {
      console.log('Login successful');
      this.router.navigateByUrl('teacher-opportunity');
    }
  }
  navigateToSignup() {
    this.router.navigateByUrl('/teachers/signup');
  }
}
