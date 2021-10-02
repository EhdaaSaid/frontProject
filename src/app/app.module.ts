import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'ngx-easy-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContentComponent } from './shared/content/content.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardComponent } from './shared/card/card.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarMemberComponent } from './shared/navbar-member/navbar-member.component';
import { MemberComponent } from './pages/member/member.component';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { AddItemComponent } from './add-item/add-item.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AddaddrComponent } from './pages/addaddr/addaddr.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditItemComponent } from './stock/edit-item/edit-item.component';
import { MyItemsComponent } from './stock/my-items/my-items.component';
import { AddCategoryComponent } from './stock/add-category/add-category.component';
import { AddHallaComponent } from './halat/add-halla/add-halla.component';
import { EditHalaComponent } from './halat/edit-hala/edit-hala.component';
import { MyHAlatComponent } from './halat/my-halat/my-halat.component';
import { CountHalatComponent } from './halat/count-halat/count-halat.component';
import { UserInterceptor } from './providers/user.interceptor';
import { AddQuantityComponent } from './stock/add-quantity/add-quantity.component';
import { SahbItemComponent } from './stock/sahb-item/sahb-item.component';
import { LogOutComponent } from './pages/log-out/log-out.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    HeaderComponent,
    CardComponent,
    LoginComponent,
    NavbarMemberComponent,
    MemberComponent,
    AdduserComponent,
    AddItemComponent,
    AddaddrComponent,
    ProfileComponent,
    EditItemComponent,
    MyItemsComponent,
    AddCategoryComponent,
    AddHallaComponent,
    EditHalaComponent,
    MyHAlatComponent,
    CountHalatComponent,
    AddQuantityComponent,
    SahbItemComponent,
    LogOutComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    NgxDatatableModule
    
  ],
  providers: [ { provide:HTTP_INTERCEPTORS , useClass:UserInterceptor , multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
