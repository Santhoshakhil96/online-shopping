import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Isignup } from '../common/interface/userdata';
import { DataService} from '../data.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  ///signn to table/////
  getsignup:Isignup[] =[]

  inputname:string;

  signinform = new FormGroup({
    emailid: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    
  })



  constructor(private cRouter:Router, private Data:DataService, private snackBar: MatSnackBar,  ) { }

  ngOnInit() {
  }

  signup(){
     this.signinform.value["emailid"];
     this.signinform.value["password"];
     this.Data.setmail(this.inputname);
     
     this.snackBar.open('Successfully Registered! Return Back to Logininpage!', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000
      })
    // if(this.signinform.valid){
    //   this.cRouter.navigate(['./login'])
    // }
    // else{
    //   alert("Enter the Correct Value")
    // }


    this.getsignup.push(this.signinform.value)
    this.Data.setsign(this.getsignup)
  }

  


}
