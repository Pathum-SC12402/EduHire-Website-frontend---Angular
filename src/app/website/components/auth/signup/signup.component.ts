import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  constructor(private router: Router) { }
  onSubmit(formData: { email: string; password: string }) {
    console.log('Form Data:', formData);
    if(formData.email=='t' && formData.password=='t') {
      console.log('Signup successful');
      this.router.navigateByUrl('/teachers/verify-email');
    }
  }
}
