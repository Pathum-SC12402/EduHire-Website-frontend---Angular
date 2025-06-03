import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ip-form',
  imports: [FormsModule],
  templateUrl: './ip-form.component.html',
  styleUrl: './ip-form.component.scss'
})
export class IpFormComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
      
    } else {
      console.log('Form is invalid');
    }
  }
}
