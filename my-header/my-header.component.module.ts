import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MyHeaderComponent } from './my-header.component';
import { IonicModule } from '@ionic/angular';
@NgModule(
    {
        declarations:[
            MyHeaderComponent,
        ],
        exports:[
            MyHeaderComponent,
        ],
        schemas:[
            CUSTOM_ELEMENTS_SCHEMA
        ],
        imports:[IonicModule]
    })
export class MyHeaderModule{}