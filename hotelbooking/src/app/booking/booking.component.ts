import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [MessageService]
})

export class BookingComponent implements OnInit {

  public idTest!: number;
  public idHotel!: number;

  public _id!: number;
  public _uName!: string;
  public _email!: string;
  public _tel!: string;

  public _typeHo!: string; //Hotel Room Type
  public _zoneHo!: string; //Hotel Zone
  public _price!: number;
  public _telHo!: string;

  public _dayIn!: string;
  public _dayOut!: string;
  public _dayNumb!: number;
  public _priceAll!: number;

  public _bookingList!: Booking[];
  public _roomList!: Room[];

  constructor(private db: AngularFireDatabase, private router: Router, private route: ActivatedRoute) {
    //  this.db.object('booking/0').set({id : 0,tel : '0905555555',dayNumb : 10 ,priceAll : 5000, nameU : 'Customer1', email : 'emailcus1@email.com', nameHo : 'Hotel1',telHo : '0361111111'  })
    this.getStartedBooking();
    this.getStartedHotel();
  }

  async getStartedBooking() {
    var booking: Booking[];
    await this.getBookingFromRealtimeDB().then(value => {
      booking = value as Booking[];
      this._bookingList = booking;
    });
    // console.log(this._bookingList);
    this._id = this._bookingList[this._bookingList.length - 1].id + 1
  }
  getBookingFromRealtimeDB() {
    return new Promise((resolve, reject) => {
      this.db.list('booking').valueChanges().subscribe(value => {
        resolve(value);
      })
    });
  }

  // items = this.cruservice.getItems();

  async getStartedHotel() {
    var room: Room[];
    await this.getHotelFromRealtimeDB().then(value => {
      room = value as Room[];
      this._roomList = room;
    });
    // console.log(this._room)
    this.idTest = 1;
    this.idHotel = this.idTest;
    this._typeHo = this._roomList[this.idHotel].name
    this._zoneHo = this._roomList[this.idHotel].address
    this._telHo = this._roomList[this.idHotel].phone
    this._price = this._roomList[this.idHotel].price
  }
  getHotelFromRealtimeDB() {
    return new Promise((resolve, reject) => {
      this.db.list('room').valueChanges().subscribe(value => {
        resolve(value);
      })
    });
  }

  async calculator() {
    var diff = Date.parse(this._dayOut) - Date.parse(this._dayIn);
    this._dayNumb = (diff / 86400000);
    this._priceAll = this._price * this._dayNumb;
  }

  async addBooking() {
    var data = {
      id: this._id,
      nameU: this._uName,   //Name Customer
      email: this._email,   //Email Customer
      tel: this._tel,       //Customer Tel
      dayIn: this._dayIn,
      dayOut: this._dayOut,
      dayNumb: this._dayNumb,
      priceAll: this._priceAll,
      nameHo: this._typeHo, //Hotel Room Type
      zoneHo: this._zoneHo, //Hotel Zone
      telHo: this._telHo    //Hotel Tel
    }
    await this.db.object('booking/' + (String(this._id))).set(data);
    await this.getStartedBooking();
    this.router.navigateByUrl('payment');
  }

  ngOnInit() {
  }

}

class Booking {
  id!: number;
  tel!: string;
  dayNumb!: number;
  dayIn!: string;
  dayOut!: string;
  priceAll!: number;
  nameU!: string;
  email!: string;
  nameHo!: string;
  zoneHo!: string;
  telHo!: string;
}

class Room {
  name!: string;
  address!: string;
  price!: number;
  id!: number;
  phone!: string;
}