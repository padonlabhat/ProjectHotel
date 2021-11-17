import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {
  public _id!:number;
  public _bookinghistoryList!: Bookinghistory[];

  constructor(private db : AngularFireDatabase) { 
   // this.db.object('booking/0').set({id : '1',name : 'namehotel'})
    this.getStarted();
  }

  ngOnInit() {   }

  async getStarted(){
    var booking: Bookinghistory[];
    await this. getBookinghistoryDB().then(value => {
      booking = value as Bookinghistory[];
     this._bookinghistoryList = booking;
    });
    this._id = this._bookinghistoryList[this._bookinghistoryList.length-1].id +1
  }

  getBookinghistoryDB(){
    return new Promise((resolve, reject)=>{
     this.db.list('booking').valueChanges().subscribe(value =>{
       resolve(value);
     })
    });
  }

}

class Bookinghistory {
  id!: number;
  tel!: string;
  dayNumb!: number;
  priceAll!: number;
  nameU!: string;
  email!: string;
  nameHo!: string;  
  dayIn!: string;
  dayOut!: string;
  zoneHo!: string;
}