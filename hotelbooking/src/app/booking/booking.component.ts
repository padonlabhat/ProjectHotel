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

  public _id!: number;
  public _tel!: string;
  public _dayNumb!: number;
  // public _dayIn!: string;
  // public _dayOut!: string;
  public _priceAll!: number;

  public _uName!: string;
  public _email!: string;

  public _nameHo!: string;
  public _address!: string;
  public _price!: number;
  public _telHo!: number;

  public _bookingList!: Booking[];
  public _user!: User[];
  public _room!: Room[];

  constructor(private db: AngularFireDatabase) {
    //  this.db.object('booking/0').set({id : 0,tel : '0905555555',dayNumb : '10' ,priceAll : '5000'})
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
    console.log(this._bookingList);
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
    console.log(this._user)

    this._uName = this._user[4].firstname + " " + this._user[4].lastname
    this._email = this._user[4].email
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
    console.log(this._room)

    this._nameHo = this._room[4].name
    this._address = this._room[4].address
    this._telHo = this._room[4].phone
    this._price = this._room[4].price
  }
  getHotelFromRealtimeDB() {
    return new Promise((resolve, reject) => {
      this.db.list('room').valueChanges().subscribe(value => {
        resolve(value);
      })
    });
  }

  async calculator() {
    this._priceAll = this._price * this._dayNumb
  }

  ngOnInit() {
  }

  async addBooking() {
    var data = {
      id: this._id,
      tel: this._tel,
      dayNumb: this._dayNumb,
      // dayIn: this._dayIn,
      // dayOut: this._dayOut,
      priceAll: this._priceAll
    }
    await this.db.object('booking/' + (String(this._id))).set(data);
    await this.getStartedBooking();
  }
}

class Booking {
  id!: number;
  tel!: string;
  // dayNumb!: number;
  // dayIn!: string;
  // dayOut!: string;
  dayNumb!: number;
  priceAll!: number;
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
  phone!: number;
}