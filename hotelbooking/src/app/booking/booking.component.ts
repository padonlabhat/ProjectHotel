import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [MessageService]
})

export class BookingComponent implements OnInit {

  public idName!: number;
  public idTest!: number;
  public idHotel!: number;

  public _id!: number;
  public _tel!: string;
  public _dayNumb!: number;
  public _dayIn!: string;
  public _dayOut!: string;
  public _priceAll!: number;

  public _uName!: string;
  public _email!: string;

  public _nameHo!: string;
  public _address!: string;
  public _price!: number;
  public _telHo!: string;

  public _bookingList!: Booking[];
  public _user!: User[];
  public _room!: Room[];

  constructor(private db: AngularFireDatabase) {
    //  this.db.object('booking/0').set({id : 0,tel : '0905555555',dayNumb : 10 ,priceAll : 5000, nameU : 'Customer1', email : 'emailcus1@email.com', nameHo : 'Hotel1',telHo : '0361111111'  })
    this.getStartedBooking();
    this.getStartedUser();
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

  async getStartedUser() {
    var user: User[];
    await this.getUserFromRealtimeDB().then(value => {
      user = value as User[];
      this._user = user;
    });
    // console.log(this._user)
    // this.idTest = 4;
    // this.idName = this.idTest;
    // this._uName = this._user[this.idName].firstname + " " + this._user[this.idName].lastname
    // this._email = this._user[this.idName].email
  }
  getUserFromRealtimeDB() {
    return new Promise((resolve, reject) => {
      this.db.list('login').valueChanges().subscribe(value => {
        resolve(value);
      })
    });
  }

  async getStartedHotel() {
    var room: Room[];
    await this.getHotelFromRealtimeDB().then(value => {
      room = value as Room[];
      this._room = room;
    });
    // console.log(this._room)
    this.idTest = 4;
    this.idHotel = this.idTest;
    this._nameHo = this._room[this.idHotel].name
    this._address = this._room[this.idHotel].address
    this._telHo = this._room[this.idHotel].phone
    this._price = this._room[this.idHotel].price
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
    this._dayNumb = Math.floor(diff / 86400000);
    this._priceAll = this._price * this._dayNumb;
  }

  ngOnInit() {
  }

  async addBooking() {
    var data = {
      id: this._id,
      tel: this._tel,
      dayNumb: this._dayNumb,
      dayIn: this._dayIn,
      dayOut: this._dayOut,
      priceAll: this._priceAll,
      nameU: this._uName,
      email: this._email,
      nameHo: this._nameHo,
      telHo: this._telHo
    }
    await this.db.object('booking/' + (String(this._id))).set(data);
    await this.getStartedBooking();
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
  telHo!: string;
}

class User {
  firstname!: string;
  lastname!: string;
  email!: string;
  uid!: number;
}

class Room {
  name!: string;
  address!: string;
  price!: number;
  id!: number;
  phone!: string;
}