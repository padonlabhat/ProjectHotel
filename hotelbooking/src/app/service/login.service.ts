import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login_uid:any;

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
  ) { }


  public getAllUserData() {
    return new Promise((resolve, reject) => {
      this.db.list('login').valueChanges().subscribe(value => {
        resolve(value);
      })
    });
  }

}
