import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  likes:number[]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  constructor() {

  }
  editlike(num:number){

    this.likes[num]++;
  }
  getlike(num:number):number{

    return this.likes[num];
  }
}
