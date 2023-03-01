import {Component,Input} from '@angular/core';
import {ProductListComponent} from "../product-list/product-list.component";
import { Router } from '@angular/router';
@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent {
  constructor(private router: Router) { }
  Phones() {
    this.router.navigate(['/phones']); // переход по ссылке
  }
  Laptops(){
    this.router.navigate(['/laptops']);
  }
  Mous(){
    this.router.navigate(['/mous']);
  }
  Key(){
    this.router.navigate(['/key']);
  }
}


























