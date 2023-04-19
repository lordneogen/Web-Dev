export interface Vacancy{
//   <div *ngIf="vacancies">
//   <h2>Список вакансий:</h2>
//     <ul>
//       <li *ngFor="let vacancy of vacancies">
//   <h3>{{ vacancy.name }}</h3>
// <p>{{ vacancy.description }}</p>
// <p>Зарплата: {{ vacancy.salary }}</p>
// <p>ID компании: {{ vacancy.company_id }}</p>
// </li>
// </ul>
// </div>
  id:number;
  name:string;
  description:string;

  salary:number;

  company_id:number;

}
