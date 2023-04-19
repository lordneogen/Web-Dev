import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getVacancies(): Observable<Vacancy[]> {
    console.log(this.http.get<Vacancy[]>(`${this.baseUrl}/api/vacancies/`));
    return this.http.get<Vacancy[]>(`${this.baseUrl}/api/vacancies/`);
  }
  getVacbyCom(a:number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}/api/companies/${a}/vacancies/`);
  }
}
