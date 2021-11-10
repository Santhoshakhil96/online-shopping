import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IProducts } from '../common/interface/userdata';
import { DataService } from '../data.service';
import { ProductComponent } from '../product/product.component';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(ProductComponent) child;
  // off:string;

  getchild=[];

  pictures:IProducts[] = [];

  setpictures:IProducts[] = [];

  buynow:IProducts[] = [];
 


   badgeCounter: number = 0; 

  slides = [
    {'image': '../../assets/scroll1.webp'}, 
    {'image': '../../assets/scroll4.gif'},
    {'image': '../../assets/scroll3.webp'}, 
    {'image': '../../assets/sroll2.webp'}, 
    {'image': '../../assets/scroll5.gif'}
  ];

  items = [];

 

  constructor(private data:DataService, private cRouter:Router, private snackBar: MatSnackBar,) { }

  ngOnInit() {
    this.badgeCounter=this.data.badgeCounter

    this.pictures = [
      {
        'id': 1,
        'title': 'Shoe',
        'img': "../../assets/product1.png",
        'price': 5300 ,
        'offer': ('34% off')
      },
      {
        'id': 2,
        'title': 'Shirt',
        'img': "../../assets/img5.webp",
        'price': 699.00 ,
        'offer': ('34% off')
      },
      {
        'id': 3,
        'title': 'Kurtis',
        'img': "../../assets/img6.webp",
        'price': 349.00 ,
        'offer': ('34% off')
      },
      {
        'id': 4,
        'title': 'Chudidhar',
        'img': "../../assets/img7.webp",
        'price': 599.99 ,
        'offer': ('34% off')
      },
      {
        'id': 5,
        'title': 'Kurta',
        'img': "../../assets/img9.webp",
        'price': 499.00 ,
        'offer': ('34% off')
      },
      {
        'id': 6,
        'title': 'Kurta',
        'img': "../../assets/img10.webp",
        'price': 699.00 ,
        'offer': ('34% off')
      },
      {
        'id': 7,
        'title': 'Kurta',
        'img': "../../assets/img11.webp",
        'price': 450.00 ,
        'offer': ('34% off')
      },
      {
        'id': 8,
        'title': 'Shoe',
        'img': "../../assets/img12.webp",
        'price': 549.00 ,
        'offer': ('34% off')
      },
      {
        'id': 9,
        'title': 'Full Top',
        'img': "../../assets/img13.webp",
        'price': 599.00 ,
        'offer': ('34% off')
      },
      {
        'id': 10,
        'title': 'Top',
        'img': "../../assets/img14.webp",
        'price': 799.00 ,
        'offer': ('34% off')
      },
    ];
  }


 ngAfterViewInit(){

  this.getchild = this.child.products;

 }

 addcart(i){
  this.setpictures.push(this.pictures[i])
  this.data.setcart(this.setpictures)
  this.snackBar.open('Item added to Cart', 'Close', {
    horizontalPosition: 'center',
    verticalPosition: 'top',
    duration: 3000
  })
  // localStorage.setItem("ATC", JSON.stringify(this.setpictures));
  // console.log(localStorage.getItem("ATC"));
 
    
  this.data.addtocart(this.pictures[i])
  this.items =this.data.getItems();
  
 
  this.badgeCounter = this.data.incrementCount();
    
  
  

 
 }

 buy(i){
  this.buynow.push(this.pictures[i])
  this.data.setbuy(this.buynow)
  this.cRouter.navigate(["/buynow"])
 }

 addcarttwo(i){
   this.setpictures.push(this.getchild[i])
   this.data.setcart(this.setpictures)
   this.snackBar.open('Item added to Cart', 'Close', {
    horizontalPosition: 'center',
    verticalPosition: 'top',
    duration: 3000
  })
  this.data.addtocart(this.getchild[i])
  // this.items =this.data.getItems();
  this.badgeCounter = this.data.incrementCount();

 }

 buytwo(i){
  this.buynow.push(this.getchild[i])
  this.data.setbuy(this.buynow)
  this.cRouter.navigate(["/buynow"])
 }

}
