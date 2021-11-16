import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { ConfirmationService } from 'primeng/api';
import { LoginService } from '../service/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ConfirmationService],
})
export class LoginComponent implements OnInit {
  userData: any;
  userUID: any;
  userJson: any;

  login: any;
  username!: string;
  password!: string;

  Check = false;

  public userlist!: User[];
  constructor(
    private router: Router,
    private db: AngularFireDatabase,
    private confirmationService: ConfirmationService,
    private loginService: LoginService,
    private http: HttpClient,
  ) {

  }

  ngOnInit(): void {
    this.getStarted();
  }

  async getStarted() {
    var user: User[];
    await this.getUserFromRealtimeDB().then(value => {
      user = value as User[];
      console.log(user);
      this.userlist = user;
    });
    for (let i = 0; i < this.userlist.length; i++) {
      console.log(this.userlist[i]);
    }
  }

  getUserFromRealtimeDB() {
    return new Promise((resolve, reject) => {
      this.db.list('login').valueChanges().subscribe(value => {
        resolve(value);
      })
    });
  }

  onLogin() {
    if (this.username && this.password) {
      var data = {
        username: this.username,
        password: this.password,
      }
      for (let i = 0; i < this.userlist.length; i++) {
        // console.log(this.userlist[i].username);
        // console.log(this.userlist[i].password);
        if (data.username == this.userlist[i].username && data.password == this.userlist[i].password) {
          console.log('login');
          this.Check = true;
          this.userUID = this.userlist[i].uid //uid
          this.userData = this.userlist[i]; //all userdata
          this.router.navigateByUrl('/dashboard');

        }
      }
      if (this.Check != true) {
        console.log('failed');
        this.password = "";
        this.checkPss();
      }
    }
  }

  checkPss() {
    this.confirmationService.confirm({
      message: 'Incorrect username or password.',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log('Please check password');
      }
    });
  }

}
class User {
  fname!: string;
  lname!: string;
  email!: string;
  username!: string;
  password!: string;
  uid!: number;
}