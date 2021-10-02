import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-count-halat',
  templateUrl: './count-halat.component.html',
  styleUrls: ['./count-halat.component.css']
})
export class CountHalatComponent implements OnInit {

  mydata:any=0

  constructor(private _hala:DataService) { }

  ngOnInit(): void {
    this.counter()
    console.log(this.mydata)
  }

  counter(){

    this._hala. counter().subscribe( data=>{
      console.log(data)
      this.mydata=data.data
      console.log(this.mydata)
     
      

    })
 

}
}
