import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: fb.control('', Validators.required),
      password: fb.control('', Validators.required)
    });
   }

  ngOnInit(): void {

  }
}
