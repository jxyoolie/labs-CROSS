import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();
  yy:number = 0;
  constructor( @Optional() private logService:LogService) { }
  getSeries(x:number){
    let sum:number = 0;
    for (let n = 0; n < 200; n++) {
      sum += Math.sin(n * x) / n;
    }
    return 2 * sum;
  }
  getTab(xn:number = -3.14, xk:number = 3.14, h:number=0.1)
  {
    let x = xn;
    let y;
    while(x < xk)
    {
      this.yy = this.getSeries(x);
      y = this.yy;
      this.xy.set(x, y);
      this.logService.write("x="+x.toFixed(2)+"y="+this.yy.toFixed(4));
      x += h;
    }
    return this.xy;
  }
}
