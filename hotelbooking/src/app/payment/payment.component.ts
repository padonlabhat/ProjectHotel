
import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Observable, ReplaySubject } from 'rxjs';





@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public _name!: string;
  public _number!: number;
  public _expiry!: number;
  public _cvv!: number;
  public _order!: number;

  public _paymentList!: Payment[];



  constructor(private db: AngularFireDatabase) { 
 //this.db.object('payment/1').set({order : '100000',name : 'game',number : '033215454554668',expiry :  '0425',cvv : '425'})
  this.getStarted();
 }
 async getStarted(){
    var payment: Payment[];
    await this. getPaymentsFromRealtimeDB().then(value => {
      payment = value as Payment[];
     this._paymentList = payment;
    });
    
    console.log(this._paymentList)
    this._order = this._paymentList[this._paymentList.length-1].order +1

 }
 getPaymentsFromRealtimeDB(){
   return new Promise((resolve, reject)=>{
    this.db.list('payment').valueChanges().subscribe(value =>{
      resolve(value);
    })
   });
 }
 
 async addpayment(){
  var data ={
  name: this._name,
   number: this._number,
   expiry:this._expiry,
   cvv: this._cvv

  }
  await this.db.object('payment/' + (String(this._order))).set(data);
  await this.getStarted();
  this.clearFields();
 }

  clearFields(){
    this._name = '',

  }
  ngOnInit(): void {
    
  }
  


}

class Payment {
  name!: string;
  number!: number;
  expiry!: number;
  cvv!: number;
  order!: number;

}