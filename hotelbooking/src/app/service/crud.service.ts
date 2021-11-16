import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import { room } from './room';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  items: room[] = [];
  constructor(public fireservices:AngularFirestore,private http: HttpClient) { }

  

  getItems() {
    return this.items;
  }

  addToCart(search: room) {
    this.items.push(search);
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
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
