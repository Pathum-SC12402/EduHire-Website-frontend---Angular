import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ip-update',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ip-update.component.html',
  styleUrl: './ip-update.component.scss'
})
export class IpUpdateComponent {
  institutionForm: FormGroup;

  coverFile!: File;
  profileFile!: File;
  coverPreview: string | ArrayBuffer | null = null;
  profilePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.institutionForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      address: [''],
      description: [''] // Used as description for institutions
    });
  }

  onImageChange(event: any, type: 'coverImage' | 'profileImage'): void {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (type === 'coverImage') {
        this.coverFile = file;
        this.coverPreview = reader.result;
      } else {
        this.profileFile = file;
        this.profilePreview = reader.result;
      }
    };
    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    if (this.institutionForm.valid) {
      const formData = new FormData();

      // Append basic form data
      Object.entries(this.institutionForm.value).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      // Append images if available
      if (this.coverFile) {
        formData.append('coverImage', this.coverFile);
      }
      if (this.profileFile) {
        formData.append('profileImage', this.profileFile);
      }

      // Submit logic (replace with actual API call)
      console.log('FormData entries:');
      for (let entry of formData.entries()) {
        console.log(entry[0], entry[1]);
      }
    }
  }
}
