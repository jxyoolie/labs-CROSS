import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  a: number = 0;
  b: number = 0;
  c: number = 0;
  result: number = 0;

  isOdd(n: number) {
    return Math.abs(n % 2) == 1;
  }

  calculate(a: any, b: any, c: any) {  // string args
    try {
      this.a = parseFloat(a);   // turning type to float
      this.b = parseFloat(b);
      this.c = parseFloat(c);
      this.result = 0;
      if (isNaN(this.a) || isNaN(this.b) || isNaN(this.c)) {  // validation
        throw new Error('Argument must be a number');
      }
      if ((this.a > 15) && (this.b > 15) && (this.c > 15)) {
        this.result = this.a * this.b * this.c;
      } else {
        this.result = (this.a + this.b + this.c) * (this.a + this.b + this.c) ;
      }
    }
    catch (e) {
      console.log(e);
    }
  }

}
