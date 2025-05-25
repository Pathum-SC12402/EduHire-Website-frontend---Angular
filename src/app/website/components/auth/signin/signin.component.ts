import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  constructor(private router: Router) { }
  onLogin(formData: { email: string; password: string }) {
    const id = localStorage.getItem('pageId');
    console.log('Form Data:', formData);
    if(id == '1' && formData.email=='t' && formData.password=='t') {
      console.log('Login successful');
      console.log('id:', id);
      this.router.navigateByUrl('/teachers/view-profile');
    }
  }
  navigateToSignup() {
    this.router.navigateByUrl('/teachers/signup');
  }
}
