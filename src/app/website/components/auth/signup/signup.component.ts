import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  constructor(private router: Router, private cookieService: CookieService) { }
  onSubmit(formData: { email: string; password: string }) {
    console.log('Form Data:', formData);
    const id = this.cookieService.get('pageId');
    console.log('Page ID:', id);
    if(id == '1' && formData.email=='t' && formData.password=='t') {
      console.log('Signup successful');
      this.router.navigateByUrl('/teachers/verify-email');
    }
    if(id == '4' && formData.email=='t' && formData.password=='t') {
      console.log('Signup successful');
      this.router.navigateByUrl('/institution/verify-email');
    }
  }
}
