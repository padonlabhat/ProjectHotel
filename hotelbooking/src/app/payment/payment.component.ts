
import { Component, OnInit } from '@angular/core';

import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable, ReplaySubject } from 'rxjs';

import {CrudService} from '../service/crud.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [MessageService]
})
export class PaymentComponent implements OnInit {

  public _name!: string;
  public _number!: number;
  public _expiry!: number;
  public _cvv!: number;
  public _order!: number;

  public _paymentList!: Payment[];




  constructor(private db : AngularFireDatabase,private messageService: MessageService, private primengConfig: PrimeNGConfig) { 
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
    //console.log(this._order)
 }
 getPaymentsFromRealtimeDB(){
   return new Promise((resolve, reject)=>{
    this.db.list('payment').valueChanges().subscribe(value =>{
      resolve(value);
    })
   });
 }
 
 async submitpayment(){
  this.showSuccess();
 
  
  if(this._name ){

  }
  // var data ={
  // name: this._name,
  //  number: this._number,
  //  expiry:this._expiry,
  //  cvv: this._cvv

  // }
 
  //await this.db.object('payment/' + (String(this._order))).set(data);
  await this.getStarted();
  this.clearFields();
 }

clearFields(){
    this._name = '';

  }



  ngOnInit(): void {
    this.primengConfig.ripple = true;

  }

showSuccess() {
    this.messageService.add({key: 'tc',severity:'success', summary: 'Success', detail: 'Message Content'});
}
showError() {
  this.messageService.add({severity:'error', summary: 'Error', detail: 'Message Content'});
}
onConfirm() {
  this.messageService.clear('c');
}

onReject() {
  this.messageService.clear('c');
}

clear() {
  this.messageService.clear();
}
}

class Payment {
  name!: string;
  number!: number;
  expiry!: number;
  cvv!: number;
  order!: number;

}