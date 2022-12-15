import { Component, OnInit, Input } from '@angular/core';

export interface Course {
  id: number;
  seqNo: number;
  url: string;
  iconUrl: string;
  courseListIcon: string;
  description: string;
  longDescription?: string;
  category: string;
  lessonsCount: number;
  promo: boolean;
}

@Component({
  selector: 'app-courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss'],
})
export class CoursesCardListComponent implements OnInit {
  @Input() courses!: Course[];

  constructor() {}

  ngOnInit(): void {}
}
