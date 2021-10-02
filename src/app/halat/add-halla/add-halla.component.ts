import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-halla',
  templateUrl: './add-halla.component.html',
  styleUrls: ['./add-halla.component.css']
})
export class AddHallaComponent implements OnInit {
 
  constructor(private _hala:DataService){}
  
  addHalaForm = new FormGroup({
    code:new FormControl(),
    name: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    phone:new FormControl("", [Validators.required]),
    wagabat:new FormControl("", [Validators.required]),
    status:new FormControl(false),
    
  })

  get name() { return this.addHalaForm.get('name')}
  get code() { return this.addHalaForm.get('code')}
  get phone() { return this.addHalaForm.get('phone')}
  get wagabat() { return this.addHalaForm.get('wagabat')}
 
  



  ngOnInit(): void {
  }

  handleRegister(){
    console.log(this.addHalaForm.value)
  }
  addHala(){
    this._hala.addHala(this.addHalaForm.value).subscribe(
      data=>{
        console.log(data.data)
        localStorage.setItem('hala',data.data)
       
      },
      ()=>{},
      ()=>{
        this.addHalaForm.reset();
        alert("اتضافت خلاص , برافو عليك ")
      }
    )
  }

}
