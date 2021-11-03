import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      fname: fb.control('', Validators.required),
      lname: fb.control('', Validators.required),
      email: fb.control('', Validators.required),
      username: fb.control('', Validators.required),
      password: fb.control('', Validators.required),
      confpassword: fb.control('', Validators.required),
    });
   }

  ngOnInit(): void {
  }

  onRegister(){
    // if(this.form.valid){
    //   const datasave = {
    //     'fname' : this.form.controls['fname'].value,
    //     'lname' : this.form.controls['lname'].value,
    //     'email' : this.form.controls['email'].value,
    //     'password' : this.form.controls['password'].value,
    //     'confpassword' : this.form.controls['confpassword'].value,
    //   };
    // }else{
      
    // }
  }
}
