import { Component, getModuleFactory, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myData:any
  idUser:any=''

  date = new Date;
  constructor(private _user:DataService , private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idUser = this._route.snapshot.params.id

    this.getMe(this.idUser)
  }

  getMe(){
    this._user.singleUser(id:any).subscribe(data=>{
      // console.log(data)
       this.myData=data.data},
      (e)=>{ this._router.navigateByUrl('user/login')},
      ()=> { console.log(2) }
      )
      }

}
