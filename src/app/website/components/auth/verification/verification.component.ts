import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-verification',
  imports: [FormsModule],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.scss'
})
export class VerificationComponent {
  digit1: string = '';
  digit2: string = '';
  digit3: string = '';
  digit4: string = '';

  constructor(private router: Router, private cookieService: CookieService) { }

  onVerify(code: string) {
    console.log('Verification code:', code);
    const id = this.cookieService.get('pageId');
    if (id == '1' && code === '1234') {
      console.log('Verification successful');
      this.router.navigateByUrl('/teachers/create-profile');
    } else if (id == '4' && code === '1234') {
      console.log('Verification successful');
      this.router.navigateByUrl('/institution/create-profile');
    }else{
      console.log('Verification failed');
      alert('Invalid verification code. Please try again.');
    }
  }
}
