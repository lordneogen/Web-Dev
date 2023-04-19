import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<any> {

    return this.http.get(`${this.baseUrl}/api/companies/`);
  }

  getCompany(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/vacancies/${id}/`);
  }

  createCompany(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/vacancies/`, data);
  }

  updateCompany(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/api/vacancies/${id}/`, data);
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/api/vacancies/${id}/`);
  }
}
