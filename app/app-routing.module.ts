import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { BuynowComponent } from './buynow/buynow.component';
import { CartComponent } from './cart/cart.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"signin",
    component: SigninComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"cart",
    component: CartComponent
  },
  {
    path:"adminpage",
    component:AdminpageComponent
  },
  {
    path:"dialogbox",
    component:DialogBoxComponent
  },
  {
      path:"feedback",
      component:FeedbackComponent
  },
  {
      path:"report",
      component:ReportComponent
  },
  {
    path:"buynow",
    component:BuynowComponent
  },
  ///wildcardrouting////
  {
    path: "**",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
