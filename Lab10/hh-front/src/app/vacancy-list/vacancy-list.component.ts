import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../vacancy.service';
import {Vacancy} from "../models";

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] =[];

  constructor(private djangoService: VacancyService) { }

  ngOnInit(): void {

    // this.categoryService.getCategories().subscribe((categories) => {
    //   this.categories = categories;
    // });

    this.djangoService.getVacancies().subscribe(
      (data) => {
        console.log(this.vacancies);
        this.vacancies = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
