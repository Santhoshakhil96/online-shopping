import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  subscription:Subscription;

  loginform = new FormGroup({
    emailid: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  })
  inputname: string;
  inputpwd: string;
  signup:string;

  constructor(private cRouter:Router, private Data:DataService) { }
  

  ngOnInit() {
    this.subscription = this.Data.getmail().subscribe(value =>{this.signup = value})
  }

  navtohome(){
    this.loginform.value["emailid"];
    this.loginform.value["password"]
    // if(this.loginform.valid){
    //   this.cRouter.navigate(['./home'])
    // }
    if (this.signup == this.inputname) {
      this.cRouter.navigate(['./home'])
    }
    else{
      alert("Enter the Correct Value")
    }
}


  navtoadminpage(){
    if(this.inputname == "admin@gmail.com" && this.inputpwd == "123")
    this.cRouter.navigate(['./adminpage'])
    else{
      alert("Invalid Emailid && Password")
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe
  }

}
