import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: any[] =[]

  constructor(private djangoService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.djangoService.getCompanies()
      .subscribe(
        data => {
          this.companies = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
