import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, } from 'rxjs';
import { IPost, IProducts, Isignup } from './common/interface/userdata';

@Injectable({
  providedIn: 'root'
})

export class DataService {


  cartitem:IProducts[] = [];
  badgeCounter: number=0;


 ////////signin input//////////////
  private emailget = new BehaviorSubject("santhosh2@gmail.com");
  currentemail = this.emailget.asObservable();

  private sign = new BehaviorSubject([]);
  currentsign = this.sign.asObservable();

  private add = new BehaviorSubject([]);
  currentadd = this.add.asObservable();

  private buy = new BehaviorSubject([]);
  currentbuy = this.buy.asObservable();
  





  constructor() { }



  ///////signup to login email///////

  setmail(value:string){
    this.emailget.next(value)
  }

  public getmail():Observable<string>{
    return this.currentemail;
  }

  ////////end///////////


  //////register sign in - table//////
  setsign(value:Isignup[]){
    this.sign.next(value)
  }
  
  public getsign():Observable<Isignup[]>{
    return this.currentsign;

  }

  /////////end/////////////

  ///////add cart////////////

  setcart(value:IProducts[]){
    this.add.next(value)
  }

  public getcart():Observable<IProducts[]>{
    return this.currentadd;
  }

  ///////////buynow//////////

  setbuy(value:IProducts[]){
    this.buy.next(value)
  }

  public getbuy():Observable<IProducts[]>{
    return this.currentbuy;
  }
  
  addtocart(setpictures:IProducts){
    this.cartitem.push(setpictures)
    this.saveCart();
  }



  saveCart(){
    localStorage.setItem('ATC', JSON.stringify(this.cartitem)); 
  }

  loadCart() {
    this.cartitem = JSON.parse(localStorage.getItem("ATC"));
  }

  getItems() {
    return this.cartitem;
  }

  removeItem(item){

     const index = this.cartitem.findIndex(o => o.id === item.id) ;
     if (index > -1) {
       this.cartitem.splice(index, 1);
       this.saveCart();
     }
  }

 

  incrementCount():number {
    this.badgeCounter++;
    return this.badgeCounter
  }

  decreaseCount() {
    if(this.badgeCounter >= 0){
      this.badgeCounter--;
    }

  }


  }
