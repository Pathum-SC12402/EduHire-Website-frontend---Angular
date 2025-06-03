import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IpUpdateComponent } from "../ip-update/ip-update.component";
import { CookieService } from 'ngx-cookie-service';
import { de } from 'date-fns/locale';

@Component({
  selector: 'app-iv-profile',
  imports: [CommonModule, IpUpdateComponent],
  templateUrl: './iv-profile.component.html',
  styleUrl: './iv-profile.component.scss'
})
export class IvProfileComponent {
   profileData: any;
    isEditVisible = true;
    constructor(private cookieService: CookieService) { }
    ngOnInit(): void {
      // Set static or fetched profile data
      const id = this.cookieService.get('pageId'); // this should be changed as profile id
      console.log('Page ID:', id);
      if (id !== '5') {
        console.log('Invalid page ID:', id);
        this.isEditVisible = false;
      }
      this.profileData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+94 77 123 4567',
        address: '123 Example Road, Colombo, Sri Lanka',
        description: 'Experienced educator with a passion for teaching and a commitment to student success. Specializes in curriculum development and innovative teaching methods.',
        coverImage: 'https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=',       // Or leave null to use fallback
        profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s',
      };
    }
  
    showUpdatePopup = false;
  
    popupUpdateForm() {
      console.log("Update form popup triggered");
      this.showUpdatePopup = true;
    }
  
    closePopup() {
      this.showUpdatePopup = false;
    }
}
