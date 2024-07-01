import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PrdouctsComponent } from './prdoucts/prdoucts.component';
import { HeaderComponent } from './header/header.component';
import { LoginService } from './login.service';
const appRoute: Routes=[
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent },
  {path:'Product',component:PrdouctsComponent },
  {path:'Contact',component:ContactComponent },
  {path:'Login',component:LoginComponent },
   

]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    PrdouctsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LoginService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
