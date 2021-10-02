import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MemberComponent } from './pages/member/member.component';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { AddaddrComponent } from './pages/addaddr/addaddr.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { AddItemComponent } from './add-item/add-item.component';
import { MyItemsComponent } from './stock/my-items/my-items.component';
import { EditItemComponent } from './stock/edit-item/edit-item.component';
import { AddQuantityComponent } from './stock/add-quantity/add-quantity.component';
import { SahbItemComponent } from './stock/sahb-item/sahb-item.component';
import { AddCategoryComponent } from './stock/add-category/add-category.component';

import { AddHallaComponent } from './halat/add-halla/add-halla.component';
import { EditHalaComponent } from './halat/edit-hala/edit-hala.component';
import { MyHAlatComponent } from './halat/my-halat/my-halat.component';
import { CountHalatComponent } from './halat/count-halat/count-halat.component';
import { LogOutComponent } from './pages/log-out/log-out.component';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { IsNotLoggedGuard } from './guards/is-not-logged.guard';
import { AllUsersComponent } from './pages/all-users/all-users.component';

// const routes: Routes = [
// {path:"" , component:HomeComponent},
// {path:"login" , component:LoginComponent},
// {path:"zwad" , component:MemberComponent},
// {path:"addUser" , component:AdduserComponent}
// ];

const routes: Routes = [
  {path:"", component:HomeComponent , canActivate:[IsLoggedGuard]},
  {path:"user", children:[
    {path:"register", component:AdduserComponent , canActivate:[IsNotLoggedGuard]},
    {path:"login", component:LoginComponent , canActivate:[IsLoggedGuard]},
    {path:"logout", component:LogOutComponent , canActivate:[IsNotLoggedGuard]},
    {path:"addAddr", component:AddaddrComponent , canActivate:[IsNotLoggedGuard]},
    {path:"profile",component:ProfileComponent , canActivate:[IsNotLoggedGuard]},
    {path:"allUser",component:AllUsersComponent , canActivate:[IsNotLoggedGuard]}
  ]},
  {path:"stock", children:[
    {path:"addItem", component:AddItemComponent , canActivate:[IsNotLoggedGuard]},
    {path:"editItem", component:EditItemComponent , canActivate:[IsNotLoggedGuard]},
    {path:"myItems", component:MyItemsComponent , canActivate:[IsNotLoggedGuard]},
    {path:"addCategory", component:AddCategoryComponent , canActivate:[IsNotLoggedGuard]},
    {path:"sahbItem", component:SahbItemComponent , canActivate:[IsNotLoggedGuard]},
    {path:"addQuqntity", component:AddQuantityComponent , canActivate:[IsNotLoggedGuard]},
    
  ]},
  {path:"hala", children:[
    {path:"addHala", component:AddHallaComponent , canActivate:[IsNotLoggedGuard]},
    {path:"editHala/:id", component:EditHalaComponent , canActivate:[IsNotLoggedGuard]},
    {path:"myHalat", component:MyHAlatComponent , canActivate:[IsNotLoggedGuard]},
    {path:"count", component:CountHalatComponent , canActivate:[IsNotLoggedGuard]},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
