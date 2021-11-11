import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import {AngularFireDatabase} from 'angularfire2/database';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
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
  public description!:String;
 

  public search!: search[];

  constructor(private db: AngularFireDatabase,private messageService: MessageService, private primengConfig: PrimeNGConfig) { 

this.getStarted();
this.addBtn();



}
addBtn(){}

save(){}
async getStarted(){
  var search: search[];
  await this. getroomDB().then(value => {
    search = value as search[];
   this.search = search;
  });
  
  console.log(this.search)
 // this._order = this.search[this.search.length-1].order +1
  //console.log(this._order)
}
getPaymentsFromRealtimeDB(){
 return new Promise((resolve, reject)=>{
  this.db.list('payment').valueChanges().subscribe(value =>{
    resolve(value);
  })
 });
}


 term : any;
  list = [{ 
      id: 1, name: 'Room1' , country: 'India', price : '2000' },
    { id: 2, name: 'Room2' , country: 'USA', price : '1500'},
    { id: 3, name: 'Room3' , country: 'UK', price : '3000'},
    { id: 4, name: 'Room4' , country: 'Canada' , price : '3000'},
    { id: 5, name: 'Room5' , country: 'Russia', price : '4500'},
    { id: 6, name: 'Room6' , country: 'China', price : '3000'},
    { id: 7, name: 'Room7' , country: 'Germany', price : '4500'},
    { id: 8, name: 'Room8' , country: 'Hong Kong', price : '4500'},
    { id: 9, name: 'Room9' , country: 'South Africa', price : '3000'},
    { id: 10, name: 'Room10' , country: 'Sri Lanka', price : '4500'},
    { id: 11, name: 'Room11' , country: 'India' , price : '4500'},
    { id: 12, name: 'Room12' , country: 'USA', price : '4500'},
    { id: 13, name: 'Room13' , country: 'UK', price : '4500'},
    { id: 14, name: 'Room14' , country: 'Canada' , price : '4500'},
    { id: 15, name: 'Room15' , country: 'Russia', price : '3000'},
    { id: 16, name: 'Room16' , country: 'China', price : '4500'},
    { id: 17, name: 'Room17' , country: 'Germany', price : '4500'},
    { id: 18, name: 'Room18' , country: 'Hong Kong', price : '3000'},
    { id: 19, name: 'Room19' , country: 'South Africa', price : '4500'},
    { id: 20, name: 'Room20' , country: 'Sri Lanka', price : '3000'}
  ];


  
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
 
addWiki (data : NgForm){
  console.log(data.value);
  this.db.list("/roombooking").push(data.value);
}

getroomDB(){
  return new Promise((resolve, reject)=>{
   this.db.list('roombooking').valueChanges().subscribe(value =>{
     resolve(value);
   })
  });
}

showSuccess() {
  this.messageService.add({key: 'tc',severity:'success', summary: 'Success', detail: 'Message Content'});
}
showError() {
this.messageService.add({severity:'error', summary: 'Error', detail: 'Message Content'});
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
class search{
  roomN! :string;
  roomID! :string;
  price!:number;
  description!:string;
}


