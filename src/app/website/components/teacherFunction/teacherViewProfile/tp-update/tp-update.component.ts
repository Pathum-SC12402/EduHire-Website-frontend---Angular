import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tp-update',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './tp-update.component.html',
  styleUrl: './tp-update.component.scss'
})
export class TpUpdateComponent {
  teacherForm: FormGroup;

  coverFile!: File;
  profileFile!: File;
  coverPreview: string | ArrayBuffer | null = null;
  profilePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.teacherForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      age: [''],
      gender: [''],
      address: [''],
      specializedArea: [''],
      preferredSide: [''],
      certificates: this.fb.array([])
    });
  }

  get certificates(): FormArray {
    return this.teacherForm.get('certificates') as FormArray;
  }

  addCertificate(): void {
    this.certificates.push(
      this.fb.group({
        name: [''],
        file: [null]
      })
    );
  }

  removeCertificate(index: number): void {
    this.certificates.removeAt(index);
  }

  onCertFileChange(event: any, index: number): void {
    const file = event.target.files[0];
    if (file) {
      this.certificates.at(index).get('file')?.setValue(file);
    }
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
    if (this.teacherForm.valid) {
      const formData = new FormData();

      // Append basic info
      Object.entries(this.teacherForm.value).forEach(([key, value]) => {
        if (key !== 'certificates') {
          formData.append(key, value as string);
        }
      });

      // Append certificates
      this.certificates.controls.forEach((control, index) => {
        formData.append(`certificates[${index}][name]`, control.value.name);
        formData.append(`certificates[${index}][file]`, control.value.file);
      });

      // Append images
      if (this.coverFile) {
        formData.append('coverImage', this.coverFile);
      }
      if (this.profileFile) {
        formData.append('profileImage', this.profileFile);
      }

      // Submit to backend (replace with actual API call)
      console.log('FormData entries:');
      for (let entry of formData.entries()) {
        console.log(entry[0], entry[1]);
      }
    }
  }
}
