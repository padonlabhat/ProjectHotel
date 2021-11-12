import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  items: search[] = [];
  constructor(public fireservices:AngularFirestore,private http: HttpClient) { }

  create_Newemployee(Record:string)
  {
    return this.fireservices.collection('Employee').add(Record);
  }

  get_Allemployee()
  {
    return this.fireservices.collection('Employee').snapshotChanges();
  }

  update_employee(recordid:number, record:string)
  {
    this.fireservices.doc('Employee/' + recordid).update(record);
  }

  delete_employee(record_id:number)
  {
    this.fireservices.doc('Employee/' + record_id).delete();
  }

  create_NewUsername(record:string)
  {
    return this.fireservices.collection('login').add(record);
  }


  
  addToCart(search:string)
  {
    return this.fireservices.collection('Booking').add(search);
  }
}


export interface search {
  roomN: string;
  roomID: string;
  price: number;
  description: string;
  _id: string;
  _name: string;
  _price: number;
  _address: string;
  _sizeroom: number;
  _totalroom: number;
  _gmail: string;
  _phone: number;
  _WiFi: any;
  _freebf: any;
  _air: any;
  _pet: any;
  _parking: any;
  _pool: any;
}
