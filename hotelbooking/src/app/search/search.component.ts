import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor() { }
 
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
  }
 
  
}