import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Transport } from './Class/transport';
import { Boat } from './Class/boat';
import { Plane } from './Class/plane';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AbstractClassPage implements OnInit {

  furniture: Transport [] = [];
  avgPlane: number = 0;
  avgShafa: number = 0;
  num: number = 0;
  constructor() { }
  getRand(max: number){
    return Math.floor(Math.random()*Math.floor(max)+1);
  }
  ras(nn:any){
    this.furniture = new Array();
    let n = parseInt(nn);
    for(let i = 0; i < n; i++){
      this.furniture.push(new Boat("Boat",this.getRand(10)));
      this.furniture.push(new Plane("Plane",this.getRand(10)));
    }
    this.getAVG(n);
  }
  getAVG(n:any){
    let litak =0, boat = 0;
    let boat_price = 0, litak_price = 0;
    for(let i = 0; i < n; i++){
      if(this.furniture[i].getName() == "Шафа")
      {
        boat++;
        boat_price += this.furniture[i].getPrice();
      }
      else{
        litak++;
        litak_price += this.furniture[i].getPrice();
      }
    }
    this.avglitak = litak_price/litak;
    this.avgboat = boat_price/boat;
  }
  getAvglitak(){
    return "Середня ціна літаків = " + this.avglitak;
  }
  getAvgboat(){
    return "Середня ціна кораблів = " + this.avgboat;
  }
  ngOnInit() {
  }

}
