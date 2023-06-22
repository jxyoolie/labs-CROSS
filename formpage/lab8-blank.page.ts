import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyFormComponent } from './my-form/my-form.component';
import { MyHeaderModule } from "../my-header/my-header.component.module";
import { ViewformComponent } from './viewform/viewform.component';
import { UpdateformComponent } from './updateform/updateform.component';

@Component({
  selector: 'app-lab8-blank',
  templateUrl: './lab8-blank.page.html',
  styleUrls: ['./lab8-blank.page.scss'],
  standalone:true,
  imports: [MyHeaderModule,ViewformComponent, UpdateformComponent, IonicModule]
})
export class Lab8BlankPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
