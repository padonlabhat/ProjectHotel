import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';



@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})







export class HotelComponent implements OnInit {

  lang = [
    { name: "HTML" },
    { name: "ReactJS" },
    { name: "Angular" },
    { name: "Bootstrap" },
    { name: "PrimeNG" },
  ];
  public _id!:string;
  public _name!: string;
  public _price!: number;

  public _sizeroom!: number;
  public _totalroom!: number;
  public _roomList!: Room[];
   public _address!: string;
 // public _gmail! : string;
 // public _phone! : number;
  //public _WiFi! : any;
  //public _freebf! :  any;
 // public _air!: any;
 // public _pet!: any;
 // public _parking!: any;
 // public _pool!: any;

  


  
  constructor(private db : AngularFireDatabase) { 
    //this.db.object('room/0').set({id : '1',name : 'namehotel'})
   
    this.getStarted();
    }
    async getStarted(){
       var room: Room[];
       await this. getroomsFromRealtimeDB().then(value => {
         room = value as Room[];
        this._roomList = room;
       });
       
      
       console.log(this._roomList)
       this._id = this._roomList[this._roomList.length-1].id +1
    
    }
    getroomsFromRealtimeDB(){
      return new Promise((resolve, reject)=>{
       this.db.list('room').valueChanges().subscribe(value =>{
         resolve(value);
       })
      });
    }
    async addroom(){

      var data ={
       name: this._name,
       id: this._id,
       price:this._price,
       sizeroom: this._sizeroom,
       totalroom: this._totalroom,
       address: this._address,
    //   gmail :this._gmail,
    //   phone : this._phone,
      //  WiFi : this._WiFi,
      //  freebf :this._freebf,
      //  air:this._air,
      //  pet:this._pet,
      //  parking:this._parking,
      //  pool:this._pool,
      
      }
     
      await this.db.object('room/' + (String(this._id))).set(data);
      await this.getStarted();
      this.clearFields();
     }
     
    clearFields(){
       
    
      }
  
  ngOnInit(): void {
  }

}
class Room {
  id!:string;
  name!: string;
  price!: number;
  address!: string;
  sizeroom!: number;
  totalroom!: number;
  //gmail! : string;
  //phone! : number;
  //WiFi! : any;
  //freebf! :  any;
  //air!: any;
  //pet!: any;
 // parking!: any;
 // pool!: any;
}


