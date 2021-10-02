import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-edit-hala',
  templateUrl: './edit-hala.component.html',
  styleUrls: ['./edit-hala.component.css']
})
export class EditHalaComponent implements OnInit {

  
  editHalaForm = new FormGroup({
    code:new FormControl(),
    name: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    phone:new FormControl("", [Validators.required]),
    wagabat:new FormControl("", [Validators.required]),
    status:new FormControl(false),
    
  })

  get name() { return this.editHalaForm.get('name')}
  get code() { return this.editHalaForm.get('code')}
  get phone() { return this.editHalaForm.get('phone')}
  get wagabat() { return this.editHalaForm.get('wagabat')}
 
   idHala:any='';
    hala:any;
    // public singleHala = localStorage.getItem('singleHala')?true:false
   
    
    
  
  constructor( private _hala:DataService , private _route: ActivatedRoute  ) {   }

  
  ngOnInit(): void {
    this.idHala = this._route.snapshot.params.id
    this.getSingleHala(this.idHala)
    
    

  }

  getSingleHala(id:any){
    this._hala.getSingleHala(id).subscribe(data=>{
      this.editHalaForm.patchValue(data)
      console.log(data)
    })
  }
  





  editHala(){
    this._hala.editHala(this.editHalaForm.value ,this.idHala ).subscribe(
      data=>{
        console.log(data.data)
        localStorage.setItem('editHala',data.data)
    
      },
      ()=>{},
      ()=>{
        this.editHalaForm.reset();
        alert("اتعدلت خلاص , شاطر ")
      }
    )
  }

}
