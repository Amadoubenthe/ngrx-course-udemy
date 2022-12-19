import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CouresesService } from 'src/app/core/services/courses/coureses.service';

export interface Course {
  id: number;
  description: string;
  longDescription?: string;
  iconUrl: string;
  lessonsCount: number;
  category: string;
  seqNo: number;
  url: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  beginnerCoureses!: Course[];
  advancedCourses!: Course[];

  constructor(private couresesService: CouresesService) {}

  ngOnInit(): void {
    this.getCoureses();
  }

  getCoureses(): void {
    this.couresesService
      .getCoureses()
      .pipe(
        map((v) => {
          console.log(v.payload);

          this.advancedCourses = v.payload.filter(
            (item) => item.category === 'ADVANCED'
          );

          this.beginnerCoureses = v.payload.filter(
            (item) => item.category === 'BEGINNER'
          );
        })
      )
      .subscribe(() => {});
  }
}
