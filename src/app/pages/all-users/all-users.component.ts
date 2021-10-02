import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {


  myData:any=[]
  constructor(private _user:DataService) { }

  ngOnInit(): void {
    this.allUser()
  }

  
  allUser(){
    this._user.myUser().subscribe( data=>{
     // console.log(data)
      this.myData=data.data
      console.log(this.myData)

    })
  }

  delUser(id:any, i:any){
    if(!confirm('استنى بتعمل اية ؟ هتتمسح كدة')) throw new Error
    else(
      this._user.deleteUser(id).subscribe(
        data=>{},
        ()=>{},
        ()=>{
          
          this.myData.splice(i,1)
        }
      )
    ) 
  }


  


}
