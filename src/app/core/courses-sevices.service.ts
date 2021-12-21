import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Learner } from '../models/learner';

@Injectable({
  providedIn: 'root',
})
export class CoursesSevicesService {
  learners_url = '../assets/learners.json';
  id = 'yoKqVevIVmIHxgavgtaaNLb7qipHgPiOzUSL6fGJ';
  secret =
    '3dpCNmER5iBZmGZnWh6sBMpp3ANv0i9p9f0QsgQXCYxjkktPSLDKBNFTcWas9gHMWkHOQcnAExfjp9yOzyCjlfTKsDwwu60eGwnxWxGiuIJz31UZutths4tIXJUVc5l7';


   
  constructor(private _http: HttpClient) {}

  getCourses(url: string): Observable<any> {
    return this._http.get<any>(url, {
      headers: new HttpHeaders({
        Accept: 'application/json, text/plain, */*',
        Authorization: `Basic eW9LcVZldklWbUlIeGdhdmd0YWFOTGI3cWlwSGdQaU96VVNMNmZHSjoJM2RwQ05tRVI1aUJabUdabldoNnNCTXBwM0FOdjBpOXA5ZjBRc2dRWENZeGpra3RQU0xES0JORlRjV2FzOWdITVdrSE9RY25BRXhmanA5eU96eUNqbGZUS3NEd3d1NjBlR3dueFd4R2l1SUp6MzFVWnV0dGhzNHRJWEpVVmM1bDc=${this.id}:${this.secret}`,
        'Content-Type': 'application/json;charset=utf-8',

        
      }),
    });
  }

  getRegisteredLearners(): Observable<Learner[]> {
    return this._http.get<Learner[]>(this.learners_url);
  }
}
