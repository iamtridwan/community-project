import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Learner } from '../models/learner';

import { Course } from '../models/course'

@Injectable({
  providedIn: 'root',
})
export class CoursesSevicesService {
  learners_url = '../assets/data/learners.json';
  id = 'yoKqVevIVmIHxgavgtaaNLb7qipHgPiOzUSL6fGJ';
  secret =
    '3dpCNmER5iBZmGZnWh6sBMpp3ANv0i9p9f0QsgQXCYxjkktPSLDKBNFTcWas9gHMWkHOQcnAExfjp9yOzyCjlfTKsDwwu60eGwnxWxGiuIJz31UZutths4tIXJUVc5l7';


   
  constructor(private _http: HttpClient) {}

  getCourses(url: string): Observable<Course[]> {
    return this._http.get<Course[]>(url)
  
  }

  getRegisteredLearners(): Observable<Learner[]> {
    return this._http.get<Learner[]>(this.learners_url);
  }

  addLearner(learner:Learner): Observable<Learner>{
    return this._http.post<Learner>(this.learners_url, learner, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

  }
}
