
import { Component, OnInit } from '@angular/core';

import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [MessageService]
})
export class PaymentComponent implements OnInit {

  public _name!: string;
  public _number!: string;
  public _expiry!: string;
  public _cvv!: string;
  public _id!: number;
  Check = false;
  public _paymentList!: Payment[];

  submitpayment() {
    if (this._name && this._number&&this._expiry&&this._cvv) {
      var data = {
            name: this._name,
            number: this._number,
            expiry:this._expiry,
            cvv: this._cvv
      }
      for (let i = 0; i < this._paymentList.length; i++) {
        if (data.name == this._paymentList[i].name && data.number == this._paymentList[i].number&& data.expiry ==
           this._paymentList[i].expiry&& data.cvv == this._paymentList[i].cvv) {
          console.log('suscess');
          this.Check = true;
        }
      }
      if (this.Check != true) {
        console.log('failed');
        this.showError();
        this.clearFields();
        
        
      }else{this.showSuccess();
        this.clearFields();
      
      }
    }
  }


  constructor(
    private db : AngularFireDatabase,
    private messageService: MessageService, 
    private primengConfig: PrimeNGConfig,
    private router: Router,
   
    ) { 
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
    this._id = this._paymentList[this._paymentList.length-1].id +1
    //console.log(this._order)
 }
 getPaymentsFromRealtimeDB(){
   return new Promise((resolve, reject)=>{
    this.db.list('payment').valueChanges().subscribe(value =>{
      resolve(value);
    })
   });
 }
 
 async addpayment(){
  this.showSuccess();
  var data ={
   name: this._name,
   number: this._number,
   expiry:this._expiry,
   cvv: this._cvv
  
  }
  console.log(this._name)
  await this.db.object('payment/' + (String(this._id))).set(data);
  await this.getStarted();
  this.clearFields();
 }
 
clearFields(){
    this._name = '';
    this._number= '';
    this._expiry= '';
    this._cvv= '';
  }



  ngOnInit(): void {
    this.primengConfig.ripple = true;

  }

showSuccess() {
    this.messageService.add({key: 'bc',severity:'success', summary: 'Success', detail: 'Success Content'});
}
showError() {
  this.messageService.add({key: 'bc',severity:'error', summary: 'Error', detail: 'Error Content'});
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
  number!: string;
  expiry!: string;
  cvv!: string;
  id!: number;

}