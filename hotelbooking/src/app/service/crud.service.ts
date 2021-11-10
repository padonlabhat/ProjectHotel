import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore) { }

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






}
