/*

import {LoadingController} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {

  data: any = [];
  dataBooks: any = [];
  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = "https://api.jsonbin.io/v3/b/6479eca09d312622a3695934";
  loading: any;
  constructor(public loadingController: LoadingController) { }
  async load() {
    this.loading = await this.loadingController.create({
      spinner: "dots",
      message: "Loading..."
    });
    await this.loading.present();
    fetch(this.dataUrl).then(res => res.json())
      .then(json => {
        this.data = json;
        this.data = this.data.record;
        let i = 0;
        console.log(this.data[1]);
        while (this.data[i] != undefined) {
          this.dataBooks.push(this.data[i][0]);
          i++;
        }
        this.loading.dismiss();
      });

  }
  ngOnInit() {
  }

  toggleDetails(i:number) {
    this.showDetails[i] = !this.showDetails[i];
  }


  newcolorRed(a: string): string {
    let d: string = this.dataBooks.author;
    let count = 0;
    for (d of this.dataBooks.author) {
      if (a == d) {
        count++;
      }
    } if (count > 1) {
      return 'red';
    } else {
      return '';
    }
  }
}



 */

import {LoadingController} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {

  data: any = [];
  dataBooks: any = [];
  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = "https://api.jsonbin.io/v3/b/6479eca09d312622a3695934";
  loading: any;
  constructor(public loadingController: LoadingController) { }
  async load() {
    this.loading = await this.loadingController.create({
      spinner: "dots",
      message: "Loading..."
    });
    await this.loading.present();
    fetch(this.dataUrl).then(res => res.json())
      .then(json => {
        this.data = json;
        this.data = this.data.record;
        let i = 0;
        console.log(this.data[1]);
        while (this.data[i] != undefined) {
          this.dataBooks.push(this.data[i][0]);
          i++;
        }

        //function of calc & color

        this.loading.dismiss();
      });

  }
  ngOnInit() {
  }

  toggleDetails(i:number) {
    this.showDetails[i] = !this.showDetails[i];
  }


  newcolorRed(author: string): string {
    let count = 0;
    for (let i = 0; i < this.dataBooks.length; i++) {
      if (this.dataBooks[i].author === author) {
        count++;
      }
    }
    if (count > 1) {
      return 'red';
    } else {
      return '';
    }
  }

  /*
  newcolorRed(author: string): string {
    if (this.dataBooks.author === "Франко І. Я.") {
      return 'red';
    } else {
      return '';
    }
  }



    checkIfDateBeforeToday() {
      const today = new Date();
      const dateWithoutTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      for (let i = 0; i < this.dataBooks.length; i++) {
        if (dateWithoutTime.getTime() > this.dataBooks[i]["due_date"]) {
          this.colorRed(this.dataBooks[i]["due_date"]);
        }
      }
    }

    isBefore(d: number) {
      const today = new Date();
      const dateWithoutTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  //
  //    console.log(d);
  //    console.log(dateWithoutTime.getTime());
  //    console.log(dateWithoutTime.getTime() > d);
      return dateWithoutTime.getTime() > d;
    }

    doRed(b: boolean) {
      console.log(b);
      return !b ? 'red' : '';
    }

    colorRed(dateJson: number) {
      const today = new Date();
      const dateWithoutTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      if (dateWithoutTime.getTime() > dateJson) {
        return 'red';
      }
      else return 'blue';
    }
  */
}
