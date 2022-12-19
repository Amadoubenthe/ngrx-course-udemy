import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss'],
})
export class CoursesCardListComponent implements OnInit {
  @Input() courses!: any;

  constructor() {}

  ngOnInit(): void {}
}
