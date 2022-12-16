import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/features/courses/courses-card-list/courses-card-list.component';

export interface Courses {
  payload: Course[];
}

@Injectable({
  providedIn: 'root',
})
export class CouresesService {
  basUrl: string = 'http://localhost:9000';

  constructor(private http: HttpClient) {}

  getCoureses(): Observable<Courses> {
    return this.http.get<Courses>(`${this.basUrl}/api/courses`);
  }
}
