import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IProducts } from '../common/interface/userdata';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy {

  pictures:IProducts[] = [];

  subs = new Subscription();

  items=[];
 

  displayedColumns: string[] = ['id', 'title', 'img', 'price','Remove'];


  dataSource = new MatTableDataSource<IProducts>();
  





  constructor(private data:DataService) { }
  

  ngOnInit() {
    this.subs = this.data.getcart().subscribe(value =>{this.pictures = value})
    
    this.data.loadCart();
    this.items = this.data.getItems();
    this.dataSource.data=this.items;
    
    
  }

  delete(element){
    // this.items.splice(j,1)
    //this.dataSource = new MatTableDataSource<IProducts>(this.items);
    this.data.removeItem(element);
    this.items = this.data.getItems();
    this.dataSource.data=this.items;
   
    this.data.decreaseCount();
    

   }

  gettotal(){
    return this.items.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }


  ngOnDestroy(){
    this.subs.unsubscribe
  }



}
