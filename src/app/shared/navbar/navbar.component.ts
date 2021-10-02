import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myRoutes = [
    {path:"", key:"الرئيسية"},
   
    {path:"user/login", key:"تسجيل الدخول", isAuth:false}]
    myLoggedRoutes=[
      {path:"", key:"الرئيسية"},
      {path:"user/register", key:"اضافة مستخدم", isAuth:true},
      {path:"user/allUser", key:"كل المستخدمين ", isAuth:true},
      {path:"user/logout", key:"تسجيل الخروج" ,isAuth:true },
      {path:"user/addAddr", key:"اضافة عنوان",isAuth:true },
      {path:"user/profile",key:"الملف الشخصى", isAuth:true},
      {path:"stock/addItem", key:"اضافة عنصر",isAuth:true},
      {path:"stock/editItem", key:"تعديل عنصر",isAuth:true},
      {path:"stock/myItems", key:"عرض العناصر", isAuth:true},
      {path:"stock/addCategory", key:"اضافة فئة", isAuth:true},
      {path:"stock/addQuqntity", key:"اذن دخول صنف", isAuth:true},
      {path:"stock/sahbItem", key:"اذن سحب صنف", isAuth:true},
      {path:"hala/addHala", key:"اضافة حالة", isAuth:true},
      {path:"hala/editHala", key:"تعديل حالة", isAuth:true},
      {path:"hala/myHalat", key:"عرض الحالات", isAuth:true},
      {path:"hala/count", key:"اجمالى الوجبات", isAuth:true},
  ]

  constructor(public _use:DataService, private _router:Router) { }

  ngOnInit(): void {
  }
  logOut(){
    this._use.logout().subscribe(
      data=>{
        console.log(data.data.token)
        localStorage.removeItem('appToken')
        this._use.navMenu = this._use.myRoutes

      },
      ()=>{},
      ()=>{
         this._router.navigateByUrl('/')
      }
    )}


}
