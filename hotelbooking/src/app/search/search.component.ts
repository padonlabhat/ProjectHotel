import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { CrudService } from '../service/crud.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [MessageService]
})
export class SearchComponent implements OnInit {


  public roomN!: string;
  public roomID!: string;
  public price!: number;
  public description!: String;
  public fileUpload!: any;
  term: any;
  public search!: search[];
  public userProfileImg: any;
  public _id!: string;
  public _name!: string;
  public _price!: number;
  public _address!: string;
  public _sizeroom!: number;
  public _totalroom!: number;
  public _gmail!: string;
  public _phone!: number;
  public _WiFi!: any;
  public _freebf!: any;
  public _air!: any;
  public _pet!: any;
  public _parking!: any;
  public _pool!: any;

  constructor(private db: AngularFireDatabase,
    private messageService: MessageService,
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

  showSuccess() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }
  onConfirm() {
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
  }

  clear() {
    this.messageService.clear();
  }

}
class search {
  roomN!: string;
  roomID!: string;
  price!: number;
  description!: string;
  _id!: string;
  _name!: string;
  _price!: number;
  _address!: string;
  _sizeroom!: number;
  _totalroom!: number;
  _gmail!: string;
  _phone!: number;
  _WiFi!: any;
  _freebf!: any;
  _air!: any;
  _pet!: any;
  _parking!: any;
  _pool!: any;
}