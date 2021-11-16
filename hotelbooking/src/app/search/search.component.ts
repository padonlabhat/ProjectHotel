import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { CrudService } from '../service/crud.service';
import { room } from '../service/room';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [MessageService]
})
export class SearchComponent implements OnInit {

  term: any;
  public search!: search[];

  constructor(private db: AngularFireDatabase,
    private primengConfig: PrimeNGConfig,
    public crudservice: CrudService) {


    this.getStarted();

  }

  ngOnInit() {
    this.primengConfig.ripple = true;

  }

  async getStarted() {
    var search: search[];
    await this.getroomDB().then(value => {
      search = value as search[];
      this.search = search;
    });
    console.log(this.search)
  }
  getroomDB() {
    return new Promise((resolve, reject) => {
      this.db.list('room').valueChanges().subscribe(value => {
        resolve(value);
      })
    });
  }

  addToCart(search: room) {
    this.crudservice.addToCart(search);
    window.alert('Your Hotel has been added to the list!');
  }
}
class search {
 
  _id!: number;
  _name!: string;
  _price!: number;
  _address!: string;
  _sizeroom!: number;
  _totalroom!: number;
}