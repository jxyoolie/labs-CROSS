import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';
@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  yy:number = 0;
  private xy = new Map();
  constructor( @Optional() private logService:LogService) { }
  getRecursion(x: number, n: number): number {
    if (n === 0) {
      return 0;
    } else {
      const term = Math.sin(n * x) / n;
      return term + this.getRecursion(x, n - 1);
    }
  }
  
  getTab(xn:number = -3.14, xk:number = 3.14, h:number=0.1){
    console.log("hi");
    let x = xn;
    let y;
    while(x < xk)
    {
      this.yy = 2 * this.getRecursion(x, 100);
      y = this.yy;
      this.xy.set(x, y);
      if(this.logService)
      this.logService.write("x="+x.toFixed(2)+"y="+this.yy.toFixed(4));
      x += h;
    }
    return this.xy;
  }
}
