import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Isignup, ITableDetails } from '../common/interface/userdata';
import { FormControl, FormGroup} from '@angular/forms'
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit,OnDestroy {

  subsc = new Subscription();

  Details:ITableDetails[] = [];

  

  getsignup: Isignup[]=[];

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'username', 'emailid', 'password','action'];
  dataSource = new MatTableDataSource(this.getsignup);

  // adminform = new FormGroup({
  //   ID: new FormControl(""),
  //   name: new FormControl("")
  // })  
  


  constructor(private cRouter: Router, private data:DataService ) { }
  
  ngOnDestroy() {
    this.subsc.unsubscribe
  }

  

  ngOnInit() {
    this.subsc = this.data.getsign().subscribe(value=>{this.getsignup = value,this.dataSource.data=this.getsignup})

  }

  // onclick(){


  //   this.Details.push(this.adminform.value)
  //   console.log(this.Details)
  // }

  ondelete(index){
    this.getsignup.splice(index,1)
    this.dataSource = new MatTableDataSource(this.getsignup);

  }

  navtodialogbox(){
    this.cRouter.navigate(['./dialogbox'])
  }
  
 
}


