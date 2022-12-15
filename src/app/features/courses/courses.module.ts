import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CourseComponent, CoursesComponent, CoursesCardListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
  ],
})
export class CoursesModule {}
