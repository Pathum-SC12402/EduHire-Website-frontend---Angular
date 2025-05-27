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
    this.cookieService.set('pageId', '1', 1);
    const id = this.cookieService.get('pageId');
    if(id == '1' && formData.email=='t' && formData.password=='t') {
      console.log('Login successful');
      this.router.navigateByUrl('/teachers/view-profile');
    }
  }
  navigateToSignup() {
    this.router.navigateByUrl('/teachers/signup');
  }
}
