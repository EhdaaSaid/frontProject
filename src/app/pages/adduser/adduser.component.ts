import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  addUserForm = new FormGroup({
    name:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password:new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone:new FormControl('', [Validators.required, Validators.minLength(3)]),
    position:new FormControl('', [Validators.required, Validators.minLength(3)]),
    addresses:new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl()
  })
  get name(){return this.addUserForm.get('name')}
  get age(){ return this.addUserForm.get('age')}
  get password(){ return this.addUserForm.get('password')}
  get email(){ return this.addUserForm.get('email')}
  get position(){ return this.addUserForm.get('position')}
  get addresses(){ return this.addUserForm.get('addresses')}
  get phone(){ return this.addUserForm.get('phone')}
 
 

  constructor(private _user:DataService) { }

  ngOnInit(): void {
  }

  addUser(){
    this._user.register(this.addUserForm.value  ).subscribe(
      data=>{
        console.log(data)
        localStorage.setItem('addUser',data)
    
      },
      ()=>{},
      ()=>{
        this.addUserForm.reset();
        alert("مبرووووك عليكوا المستخدم الجديد ")
      }
    )
  }






    

  

}
