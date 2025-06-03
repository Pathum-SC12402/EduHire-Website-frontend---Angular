import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { startOfWeek, getWeek } from 'date-fns';

@Component({
  selector: 'app-ia-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './ia-card.component.html',
  styleUrl: './ia-card.component.scss'
})
export class IaCardComponent {
  selectedSubject: string = '';
  selectedGender: string = '';
  uniqueSubjects: string[] = [];
  uniqueGenders: string[] = [];
  filteredVacancies: any[] = [];

  jobVacancies: any[] = [];
  weeks: { week: number, monday: Date, jobs: any[] }[] = [];

  ngOnInit(): void {
    this.jobVacancies = [
      {
        id: 1,
        name: "Kamal",
        gender: "male",
        email: "kamal@example.com",
        phone: "+94 77 123 4567",
        cv: "https://drive.google.com/file/d/1DskMRj6-CAzCY1M9bo8Ug2nAR0EEe-4T/view?usp=sharing",
        coverLetter: "https://drive.google.com/file/d/1DskMRj6-CAzCY1M9bo8Ug2nAR0EEe-4T/view?usp=sharing",
        profileLink: "https://www.linkedin.com/in/kamal-example",
        applyDate: "2025-06-15",
        location: "Colombo",
        subject: "Mathematics"
      },
      {
        id: 2,
        name: "Nadeesha",
        gender: "female",
        email: "nadeesha@example.com",
        phone: "+94 71 234 5678",
        cv: "https://drive.google.com/file/d/2AbcdEFgHIjkLMnoPQrsTUVwx/view?usp=sharing",
        coverLetter: "https://drive.google.com/file/d/2AbcdEFgHIjkLMnoPQrsTUVwx/view?usp=sharing",
        profileLink: "https://www.linkedin.com/in/nadeesha-profile",
        applyDate: "2025-06-12",
        location: "Kandy",
        subject: "Science"
      },
      {
        id: 3,
        name: "Tharindu",
        gender: "male",
        email: "tharindu@example.com",
        phone: "+94 76 987 6543",
        cv: "https://drive.google.com/file/d/3LMNOpqRSTuvWXYza/view?usp=sharing",
        coverLetter: "https://drive.google.com/file/d/3LMNOpqRSTuvWXYza/view?usp=sharing",
        profileLink: "https://www.linkedin.com/in/tharindu-tech",
        applyDate: "2025-06-10",
        location: "Galle",
        subject: "Information Technology"
      },
      {
        id: 4,
        name: "Ishara",
        gender: "female",
        email: "ishara@example.com",
        phone: "+94 70 555 1111",
        cv: "https://drive.google.com/file/d/4PQRSabcDEfgHIjkl/view?usp=sharing",
        coverLetter: "https://drive.google.com/file/d/4PQRSabcDEfgHIjkl/view?usp=sharing",
        profileLink: "https://www.linkedin.com/in/ishara-silva",
        applyDate: "2025-06-14",
        location: "Jaffna",
        subject: "English"
      },
      {
        id: 5,
        name: "Dinuka",
        gender: "male",
        email: "dinuka@example.com",
        phone: "+94 72 333 8888",
        cv: "https://drive.google.com/file/d/5UVWxyzABCdefGHIJ/view?usp=sharing",
        coverLetter: "https://drive.google.com/file/d/5UVWxyzABCdefGHIJ/view?usp=sharing",
        profileLink: "https://www.linkedin.com/in/dinuka-jay",
        applyDate: "2025-05-11",
        location: "Negombo",
        subject: "History"
      }
    ];
    this.uniqueSubjects = Array.from(new Set(this.jobVacancies.map(j => j.subject))).sort();
    this.uniqueGenders = Array.from(new Set(this.jobVacancies.map(j => j.gender))).sort();
    this.applyFilters();

  }

  applyFilters(): void {
    this.filteredVacancies = this.jobVacancies.filter(job => {
      return (!this.selectedSubject || job.subject === this.selectedSubject) &&
            (!this.selectedGender || job.gender === this.selectedGender);
    });
    this.groupByWeek();
  }

  groupByWeek(): void {
    const weekMap = new Map<number, { monday: Date, jobs: any[] }>();

    for (let job of this.filteredVacancies) {
      const jobDate = new Date(job.applyDate);
      const weekNumber = getWeek(jobDate, { weekStartsOn: 1 });
      const monday = startOfWeek(jobDate, { weekStartsOn: 1 });

      if (!weekMap.has(weekNumber)) {
        weekMap.set(weekNumber, { monday, jobs: [] });
      }

      weekMap.get(weekNumber)!.jobs.push(job);
    }

    this.weeks = Array.from(weekMap.entries())
      .map(([week, data]) => ({
        week,
        monday: data.monday,
        jobs: data.jobs
      }))
      .sort((a, b) => a.week - b.week);
  }
}
