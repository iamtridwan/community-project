import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Learner } from '../models/learner';

import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesSevicesService {
  // learners_url = '../assets/data/learners.json';
  // change this url when you deploy
  learners_url = 'http://localhost:3000/users';
  id = 'yoKqVevIVmIHxgavgtaaNLb7qipHgPiOzUSL6fGJ';
  id2 = 'hdVJebnKXi4wjtfxNDGbcSgr46KIubk4flfFmSed';
  secret =
    '3dpCNmER5iBZmGZnWh6sBMpp3ANv0i9p9f0QsgQXCYxjkktPSLDKBNFTcWas9gHMWkHOQcnAExfjp9yOzyCjlfTKsDwwu60eGwnxWxGiuIJz31UZutths4tIXJUVc5l7';
  secret2 =
    'i2cK7LeDMPfoAh4WD3ljLKytfhHnCKacjTisMuMWQvTkV0iBQQLWrJHCMvHDir9xJWjVeVH1lZ7pJTnkURSLt4w0NibxKwWaIPXq1wa38F884VHq8ugdy1pKnbaIRwSF';
  url =
    'get /api-2.0/courses/?page=2&category=IT%20&%20Software&price=price-paid';

  headers =new HttpHeaders ({
    'Content-Type': 'application/json',
    'Allow-Access-Control-Origin': '*'
  });
  constructor(private _http: HttpClient) {}

  getCourses(url: string): Observable<Course[]> {
    return this._http.get<Course[]>(url,{headers: this.headers});
  }

  getRegisteredLearners(): Observable<Learner[]> {
    return this._http.get<Learner[]>(this.learners_url);
  }

  addLearner(learner: Learner): Observable<Learner> {
    return this._http.post<Learner>(this.learners_url, learner, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
