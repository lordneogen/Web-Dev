import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import {CompanyListComponent} from "./company-list/company-list.component";
@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    VacancyListComponent,
    VacancyDetailComponent,
    CompanyDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,

    RouterModule.forRoot([
      {path: 'api/companies', component: CompanyListComponent},
      {path: 'api/companies/:companiesId', component: CompanyDetailComponent},
      {path: 'api/vacancies', component: VacancyListComponent}
    ]),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
