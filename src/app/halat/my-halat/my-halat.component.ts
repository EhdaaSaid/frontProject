import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-my-halat',
  templateUrl: './my-halat.component.html',
  styleUrls: ['./my-halat.component.css']
})
export class MyHAlatComponent implements OnInit {
   mydata:any=[]


  constructor(private _halat:DataService , private _router:Router) { }
 

  ngOnInit(): void {
    this.myHalat()

   
  }


  myHalat(){
    this._halat.myHalat().subscribe( data=>{
      console.log(data)
      this.mydata=data.data
      console.log(this.mydata)

    })
  }

  delHala(id:any, i:any){
    if(!confirm('استنى بتعمل اية ؟ هتتمسح كدة')) throw new Error
    else(
      this._halat.deleteHala(id).subscribe(
        data=>{},
        ()=>{},
        ()=>{
          
          this.mydata.splice(i,1)
        }
      )
    ) 
  }


  


  
    




 
}
