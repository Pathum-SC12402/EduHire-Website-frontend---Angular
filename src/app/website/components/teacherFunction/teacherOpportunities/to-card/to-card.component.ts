import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { startOfWeek, getWeek } from 'date-fns';

@Component({
  selector: 'app-to-card',
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './to-card.component.html',
  styleUrl: './to-card.component.scss'
})
export class ToCardComponent {
  selectedType: string = '';
  selectedField: string = '';
  uniqueFields: string[] = [];
  filteredVacancies: any[] = [];

  jobVacancies: any[] = [];
  weeks: { week: number, monday: Date, jobs: any[] }[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.jobVacancies = [
      {
        id: 1,
        schoolName: "Springfield High School",
        district: "Colombo",
        field: "Mathematics",
        opened: "2025-05-19",
        deadline: "2025-06-15",
        type: "School"
      },
      {
        schoolName: "TechVision Institute",
        district: "Kandy",
        field: "Computer Science",
        opened: "2025-05-21",
        deadline: "2025-06-30",
        type: "Institute"
      },
      {
        id: 2,
        schoolName: "Oceanview College",
        district: "Galle",
        field: "English Literature",
        opened: "2025-05-26",
        deadline: "2025-06-25",
        type: "School"
      },
      {
        schoolName: "Hilltop Academy",
        district: "Nuwara Eliya",
        field: "ICT",
        opened: "2025-06-02",
        deadline: "2025-07-01",
        type: "School"
      },
      {
        id: 3,
        schoolName: "Riverside Institute",
        district: "Kurunegala",
        field: "Biology",
        opened: "2025-06-04",
        deadline: "2025-07-10",
        type: "Institute"
      },
      {
        id: 4,
        schoolName: "Lakeside School",
        district: "Matara",
        field: "History",
        opened: "2025-06-10",
        deadline: "2025-07-05",
        type: "School"
      }
    ];
    this.uniqueFields = Array.from(new Set(this.jobVacancies.map(j => j.field))).sort();
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredVacancies = this.jobVacancies.filter(job => {
      return (!this.selectedType || job.type === this.selectedType) &&
            (!this.selectedField || job.field === this.selectedField);
    });

    this.groupByWeek();
  }

  groupByWeek(): void {
    const weekMap = new Map<number, { monday: Date, jobs: any[] }>();

    for (let job of this.filteredVacancies) {
      const jobDate = new Date(job.opened);
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

  viewCard(jobId: number): void {
    this.router.navigateByUrl(`/teacher-opportunity/details/${jobId}`);
  }

  isRootTORoute(): boolean {
    return this.router.url === '/teacher-opportunity' || this.router.url === '/teacher-opportunity/';
  }
}
