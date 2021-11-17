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




}