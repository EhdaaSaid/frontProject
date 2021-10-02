import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _id(_id: any) {
    throw new Error('Method not implemented.');
  }
  public myRoutes = [
    {path:"", key:"الرئيسية"},
    
    {path:"user/login", key:"تسجيل الدخول", isAuth:false}]
   public myLoggedRoutes=[
      {path:"", key:"الرئيسية"},
      {path:"user/register", key:"اضافة مستخدم", isAuth:true},
      {path:"user/allUser", key:"كل المستخدمين ", isAuth:true},
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




  public isLoggedIn = localStorage.getItem("appToken")? true:false
  public navMenu = localStorage.getItem("appToken")? this.myLoggedRoutes:this.myRoutes
 

  commonUrl = "http://localhost:3000/"

  constructor(private _http: HttpClient) { }
  register(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}user/register`, data)
  }
  login(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}user/login`, data)
  }
  addAddr(data:any, id:any):Observable<any>{
    return this._http.post(`${this.commonUrl}user/addAddr/${id}`, data)
  }
  logout():Observable<any>{
    return this._http.post(`${this.commonUrl}user/logout`, null)
  }
  me():Observable<any>{
    return this._http.get(`${this.commonUrl}user/me`)
  }
  singleUser(id:any):Observable<any>{
    return this._http.get(`${this.commonUrl}singleuser/${id}`)
  }
  addPImg(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}user/addPImg`, data)
  }
  myUser():Observable<any>{
    return this._http.get(`${this.commonUrl}user/allUser`)
  }
  deleteUser(id:any):Observable<any>{
    return this._http.delete(`${this.commonUrl}user/deleteUser/${id}`)
  }

  addItem(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}stock/addItem`, data)
  }
  myItems():Observable<any>{
    return this._http.get(`${this.commonUrl}stock/myItems`)
  }
  editItem(data:any, id:any):Observable<any>{
    return this._http.patch(`${this.commonUrl}stock/editItem/${id}`, data)
  }
  addcategory(data:any, id:any):Observable<any>{
    return this._http.post(`${this.commonUrl}stock/addCategory/${id}`, data)
  }
  addQuantity(data:any, id:any):Observable<any>{
    return this._http.patch(`${this.commonUrl}stock/addQuqntity/${id}`, data)
  }
  sahbItem(data:any, id:any):Observable<any>{
    return this._http.patch(`${this.commonUrl}stock/sahbItem/${id}`, data)
  }
  addHala(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}hala/addHala`, data)
  }
  myHalat():Observable<any>{
    return this._http.get(`${this.commonUrl}hala/myHalat`)
  }
  getSingleHala( id:any):Observable<any>{
    return this._http.get(`${this.commonUrl}hala/singleHala/${id}`)
  }
  editHala(data:any, id:any):Observable<any>{
    return this._http.patch(`${this.commonUrl}hala/editHala/${id}`, data)
  }
  counter():Observable<any>{
    return this._http.get(`${this.commonUrl}hala/count`)
  }
  deleteHala(id:any):Observable<any>{
    return this._http.delete(`${this.commonUrl}hala/deletHala/${id}`)
  }

}


