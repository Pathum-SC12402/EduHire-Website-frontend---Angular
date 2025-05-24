import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tp-form',
  imports: [FormsModule],
  templateUrl: './tp-form.component.html',
  styleUrl: './tp-form.component.scss'
})
export class TpFormComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
      
    } else {
      console.log('Form is invalid');
    }
  }
}
