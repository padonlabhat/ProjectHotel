import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList }  from 'angularfire2/database';

import { Observable } from 'rxjs';




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
  public hotelbooking: Observable<any>[] = [];
  constructor(private db: AngularFireDatabase) { 
    this.db.object('payment/0').set({id : 1,name :  'game'})

}
  ngOnInit(): void {
    
  }

}
