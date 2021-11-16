import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-headerhotel',
  templateUrl: './headerhotel.component.html',
  styleUrls: ['./headerhotel.component.css']
})
export class HeaderhotelComponent implements OnInit {
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