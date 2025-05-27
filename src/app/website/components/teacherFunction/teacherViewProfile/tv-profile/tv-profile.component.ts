import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tv-profile',
  imports: [CommonModule],
  templateUrl: './tv-profile.component.html',
  styleUrl: './tv-profile.component.scss'
})
export class TvProfileComponent {
  profileData: any;

  ngOnInit(): void {
    // Set static or fetched profile data
    this.profileData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+94 77 123 4567',
      age: 32,
      gender: 'Male',
      address: '123 Example Road, Colombo, Sri Lanka',
      specializedArea: 'Mathematics',
      preferredSide: 'Online & Physical',
      coverImage: 'https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=',       // Or leave null to use fallback
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s',
      cv: 'https://drive.google.com/file/d/1DskMRj6-CAzCY1M9bo8Ug2nAR0EEe-4T/view?usp=sharing',
      certificates: [
        {
          name: 'Advanced Mathematics Teaching Certificate',
          url: 'https://drive.google.com/file/d/1DskMRj6-CAzCY1M9bo8Ug2nAR0EEe-4T/view?usp=sharing'
        },
        {
          name: 'Online Education Strategy',
          url: 'https://example.com/certificates/online-edu.pdf'
        }
      ]
    };
  }
}
