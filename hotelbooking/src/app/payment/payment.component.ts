
import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Observable, ReplaySubject } from 'rxjs';





@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  name_card= '';
  number_card= '';
  expiry_card= '';
  cvv_card= '';
  public _name!: string;
  public _number!: number;
  public _expiry!: number;
  public _cvv!: number;

  public _paymentList!: Payment[];



  constructor(private db: AngularFireDatabase) { 
 this.db.object('payment/0').set({name : 'game',number : '033215454554668',expiry :  '0425',cvv : '425'})
  this.getStarted();
 }
 async getStarted(){
    var payment: Payment[];
    await this. getPaymentsFromRealtimeDB().then(value => {
      payment = value as Payment[];
     this._paymentList = payment;
    });
    
    console.log(this._paymentList)
    //this._order = this._paymentList[this._paymentList.length-1].id +1

 }
 getPaymentsFromRealtimeDB(){
   return new Promise((resolve, reject)=>{
    this.db.list('payment').valueChanges().subscribe(value =>{
      resolve(value);
    })
   });
 }
 
  ngOnInit(): void {
    
  }
  


}

class Payment {
  name!: string;
  number!: number;
  expiry!: number;
  cvv!: number;

}