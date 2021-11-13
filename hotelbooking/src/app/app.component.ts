import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  Userdata: any;
  
  user = 'username';

  fname!: string;
  lname!: string;
  email!: string;
  username!: string;

  constructor(
    private route: ActivatedRoute,
  ) { 

  }

  title = 'hotelbooking';
  ngOnInit(): void {
    
    
  }

}
