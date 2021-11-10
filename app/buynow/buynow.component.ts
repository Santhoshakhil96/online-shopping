import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from '../common/interface/userdata';
import { DataService } from '../data.service';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent implements OnInit {

  pictures:IProducts[] = [];

  subs = new Subscription();

  item_qty: number = 0;
  itemfinal: any;

  constructor(private data:DataService) { }

  ngOnInit() {

    this.subs = this.data.getbuy().subscribe(value =>{this.pictures = value})

  }

  increment(i){
    if(this.item_qty != 5){
      this.item_qty += 1
      var j=  this.pictures[i].price * this.item_qty;
      this.itemfinal = j
    }
    
 

  }

  decrement(i) {
    if(this.item_qty !=0){
    this.item_qty -=1
    var j= this.pictures[i].price  * this.item_qty;
    this.itemfinal = j
    }
    
  }
}

