import { Component,Inject,Optional, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { IRandomUsers, Isignup } from '../common/interface/userdata';
import { RandomApiService } from '../random-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit,OnDestroy {

  // private subs = new Subscription();

 
  

  displayedColumns: string[] = ['id', 'email', 'firstname', 'lastname', 'avatar',];

  public dataSource: MatTableDataSource<IRandomUsers>;


  private dataArray: any;
  aData: IRandomUsers[];
  
  constructor(private dataservice: RandomApiService, private _snackBar: MatSnackBar, ) {
    
     }

  ngOnInit() {
  }



  // public openRecord(name: string, email: string): void {
  //   this._snackBar.open('Record ${{element.name}} ${element.email} ', 'Close', {
  //     horizontalPosition: 'center',
  //     verticalPosition: 'top',
  //   });    
  // }

  toview(){
    var aData = this.dataservice.getRandomUsers();
      aData.then((res) => {
        this.dataArray = res.data;
        this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
      },
       );
        // console.log(aData)
        // console.log(this.dataSource.data)
  }


  ngOnDestroy() {
    // if (this.subs) {
    //   this.subs.unsubscribe();
    // }
  }

  }



