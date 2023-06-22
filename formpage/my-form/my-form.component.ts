import { Component, OnInit } from '@angular/core';
import { Department } from './class/department';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { phoneValidaror } from './Service/phoneValidator';
import { AddressValidatorService } from '../address-validator.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {

  facultyForm!: FormGroup;
  faculty!: Department;


  constructor(private fb: FormBuilder) {
    this.facultyForm = this.fb.group({
      facultyName: ['', [Validators.required]],
      facultyDekan: ['', [Validators.required]],
      facultyPhoneNumber: ['', [phoneValidaror()]],
      facultyAddress: [''],
      kafedras: new FormArray([new FormControl()]),

    });
  }

  addKaf() {
    (this.facultyForm.controls['kafedras'] as FormArray)
      .push(new FormControl())
  }
  deleteKaf(i: any) {
    (this.facultyForm.controls['kafedras'] as FormArray).removeAt(i);
  }
  getControls() {
    return (this.facultyForm.get('kafedras') as FormArray).controls;
  }
  onSubmit() {
    let name = this.facultyForm.value.facultyName;
    let dekan = this.facultyForm.value.facultyDekan;
    let phone = this.facultyForm.value.facultyPhoneNumber;
    let address = this.facultyForm.value.facultyAddress;
    let kafedras = this.facultyForm.value.kafedras;
    let valid = new AddressValidatorService();
    if (valid.validateAddress(address)) {
      this.faculty = new Department(name, dekan, phone, address, kafedras)
      console.log("submit")
      console.log(this.faculty)
    }
    else
      alert("Помилка")
  }

  ngOnInit() { }

}