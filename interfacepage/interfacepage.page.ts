import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Worker } from './worker';
import { Team } from './team';
import { Engineer} from './engineer';
import { Admin } from './admins';
import { MyHeaderModule } from '../my-header/my-header.component.module';


@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MyHeaderModule]
})
export class InterfacepagePage implements OnInit {

  show:string="";
  constructor() { }

  ngOnInit() {
  }
  ras(){
    let worker = new Worker ("Ольга Васильчук");
    console.log(worker.checkStatus());
    let engineer = new Engineer("Василь Інженер");
    console.log(engineer.checkStatus());
    let admin = new Admin("Ігор Адмін");
    console.log(admin.checkStatus());
    let team = new Team();
    console.log(team.checkStatus());
    this.show = worker.name + " " + worker.checkStatus() + '\n' +
      engineer.name + " " + engineer.checkStatus() + '\n' +
      admin.name + " " + admin.checkStatus() + '\n' +
      team.name + " " + team.checkStatus();
  }

}
