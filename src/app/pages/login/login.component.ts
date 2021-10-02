import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DataService } from 'src/app/services/data.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(),
    password:new FormControl()
  })

  constructor(private _user:DataService , private _router:Router ) { }

  ngOnInit(): void {
  }

  login(){
    this._user.login(this.loginForm.value).subscribe(
      data=>{
        console.log(data.data.token)
        localStorage.setItem('appToken', data.data.token)
      },
      ()=>{},
      ()=>{
        this._user.navMenu = this._user.myLoggedRoutes
         this._router.navigateByUrl('user/profile')
      }
    )
  }
 
}
