import { Component, OnInit } from '@angular/core';
import { Subject } from '../my-form/class/subject';
import { IonicModule } from '@ionic/angular';
import { MyFormComponent } from '../my-form/my-form.component';
import { UpdateformComponent } from '../updateform/updateform.component';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
  standalone:true,
  imports:[IonicModule, MyFormComponent, UpdateformComponent, CommonModule],
})
export class ViewformComponent implements OnInit {
  show_update:boolean = false;
  kafedra: Subject[] = [];
  constructor() { }

  ngOnInit() {}

  addKaf(event: any) {
    if (event as Subject) {
      let kafedra: Subject = event;
      this.kafedra.push(kafedra);
      console.log(this.kafedra);
    } else {
      throw new Error("Error of type");
    }
  }
  update(){this.show_update = true;}
  showUp(event:any){
    if (typeof event === "boolean"){ this.show_update = event; }
    else{
      throw new Error("Error of type");
    }
  }
  update_save(event:any, i:number){
    if(event as Subject){
      this.kafedra[i] = event;
    }
    else{
      throw new Error("Error of type");
    }
  }
}
