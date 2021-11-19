import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { CrudService } from '../service/crud.service';
import { ConfirmationService } from 'primeng/api';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ConfirmationService]
})
export class RegisterComponent implements OnInit {

  fname!: string;
  lname!: string;
  email!: string;
  username!: string;
  password!: string;
  confpassword!: string;


  _id!: number;
  public userlist!: User[];

  constructor(
    private router: Router,
    // public crudService: CrudService,
    private confirmationService: ConfirmationService,
    private db: AngularFireDatabase,
  ) {

  }

  ngOnInit(): void {
    this.getStarted();
  }

  onRegister() {
    if (this.fname || this.lname || this.email || this.username || this.password || this.confpassword) {
      if (this.password == this.confpassword) {
        this.addUser();
        this.inputSucc();
      } else {
        console.log('password incorrect');
        this.checkPss();
      }
    } else {
      console.log('input err');
      this.inputErr();
    }
  }

  async getStarted() {
    var user: User[];
    await this.getUserFromRealtimeDB().then(value => {
      user = value as User[];
      this.userlist = user;
    });
    console.log(this.userlist);
    
    this._id = this.userlist[this.userlist.length-1].uid +1
  }

  async addUser() {
    this._id = this.userlist.length;
    var data = {
      uid: this.userlist.length,
      firstname: this.fname,
      lastname: this.lname,
      email: this.email,
      username: this.username,
      password: this.password,
    }
    console.log(data);
    await this.db.object('login/' + (String(this._id))).set(data);
    await this.getStarted();
    this.clearFields();
  }

  clearFields() {
    this.fname = "";
    this.lname = "";
    this.email = "";
    this.username = "";
    this.password = "";
    this.confpassword = "";
  }

  getUserFromRealtimeDB() {
    return new Promise((resolve, reject) => {
      this.db.list('login').valueChanges().subscribe(value => {
        resolve(value);
      })
    });
  }

  inputErr() {
    this.confirmationService.confirm({
      message: 'Please make sure you enter the correct information.',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log('input error');
      }
    });
  }

  inputSucc() {
    this.confirmationService.confirm({
      message: 'Register Success.',
      header: 'Confirmation',
      icon: 'pi pi-check',
      accept: () => {
        console.log('register success');
        this.router.navigateByUrl('/login')
      }
    });
  }

  checkPss() {
    this.confirmationService.confirm({
      message: 'Please make sure your password is correct.',
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