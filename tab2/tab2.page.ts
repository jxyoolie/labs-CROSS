import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  a: number = 0;
  b: number = 0;
  counter: number = 0;
  array: number[] = [];

  calculate(a: any, b: any) {
    try {
      this.a = parseInt(a);
      this.b = parseInt(b);
      this.counter = 0;
      if (isNaN(this.a) || isNaN(this.b)) {
        throw new Error('Argument must be a number');
      }
      for (let i = this.a; i <= this.b; i++) {
        if (i % 14 === 0 ) {
          this.counter++;
          this.array.push(i);
        }
      }
    }
    catch (e) {
      console.log(e);
    }
  }

}
