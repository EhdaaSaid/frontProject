import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private _user:DataService ,private _router:Router) { }

  ngOnInit(): void {
    this.logOut();
  }

  logOut(){
    this._user.logout().subscribe(
      data=>{
        console.log(data.data.token)
        localStorage.removeItem('appToken')
      },
      ()=>{},
      ()=>{
        this._user.navMenu = this._user.myLoggedRoutes
         this._router.navigateByUrl('')
      }
    )

  
  }
}
