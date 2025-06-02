import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-application-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.scss'
})
export class ApplicationFormComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    trust: false,
    coverLetter: null as File | null,
    cv: null as File | null
  };

  onFileChange(event: any, type: 'coverLetter' | 'cv') {
    const file = event.target.files[0];
    if (file) {
      this.formData[type] = file;
    }
  }

  onSubmit() {
    console.log('Application submitted:', this.formData);
    // handle upload logic here
  }

  onClear() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      trust: false,
      coverLetter: null,
      cv: null
    };
  }
}
