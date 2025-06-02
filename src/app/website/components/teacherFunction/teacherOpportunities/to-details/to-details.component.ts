import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to-details',
  imports: [CommonModule],
  templateUrl: './to-details.component.html',
  styleUrl: './to-details.component.scss'
})
export class ToDetailsComponent {
  jobId: number | undefined;
  job: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.jobId = Number(this.route.snapshot.paramMap.get('id'));
    if(!this.jobId) {
      console.error('Job ID is not provided in the route');
      return;
    }else {
      console.log('Job ID:', this.jobId);
      this.job = {
        schoolName: "Oceanview College",
        district: "Galle",
        field: "English Literature",
        type: "School",
        level: "Grades 6–11",
        opened: new Date('2025-05-10'),
        deadline: new Date('2025-06-10'),
        description: "We are looking for a dedicated English Literature teacher with a passion for inspiring young minds.",
        requirements: [
          "Bachelor's degree in English or Education",
          "Minimum 2 years of teaching experience",
          "Fluency in English",
          "Good classroom management skills"
        ]
      };
    }
  }

  goBack() {
    //this.location.back();
  }
}
