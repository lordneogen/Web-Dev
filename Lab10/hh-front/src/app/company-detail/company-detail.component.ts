import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../company.service";
import {ActivatedRoute} from "@angular/router";
import {VacancyService} from "../vacancy.service";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit{

  vac: any[] =[];

  constructor(
    private companyServe:CompanyService,

    private djangoService: VacancyService,
    private route: ActivatedRoute,

  ) { }
  ngOnInit():void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const comid = Number(routeParams.get('companiesId'));
    console.log(comid)
    this.djangoService.getVacbyCom(comid).subscribe(
        (data) => {
          console.log(this.vac);
          this.vac = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
