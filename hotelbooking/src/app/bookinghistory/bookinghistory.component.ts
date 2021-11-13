import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {
  public _id!:string;
  public _bookinghistoryList!: Bookinghistory[];
  // constructor() { }
  constructor(private db : AngularFireDatabase) { 
    this.db.object('room/0').set({id : '1',name : 'namehotel'})
   
    this.getStarted();
  }

  ngOnInit() {   }

  async getStarted(){
    var room: Bookinghistory[];
    await this. getBookinghistoryDB().then(value => {
      room = value as Bookinghistory[];
     this._bookinghistoryList = room;
    });
    console.log(this._bookinghistoryList)
    this._id = this._bookinghistoryList[this._bookinghistoryList.length-1].id +1
  }

  getBookinghistoryDB(){
    return new Promise((resolve, reject)=>{
     this.db.list('room').valueChanges().subscribe(value =>{
       resolve(value);
     })
    });
  }

}

class Bookinghistory {
  id!:string;
  name!: string;
  price!: number;
  address!: string;
  sizeroom!: number;
  totalroom!: number;
  gmail! : string;
  phone! : number;
  WiFi! : any;
  freebf! :  any;
  air!: any;
  pet!: any;
  parking!: any;
  pool!: any;

}