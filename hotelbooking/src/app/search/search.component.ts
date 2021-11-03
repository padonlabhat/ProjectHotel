import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  late = [
    { name: "1500" },
    { name: "2000" },
    { name: "3000" },
    { name: "4000" },
    { name: "5000" },
  ];
  size = [
    { name: "S" },
    { name: "M" },
    { name: "L" },
    { name: "XL" },
    { name: "XXL" },
  ];
  person = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
  ];
  level = [
    { name: "normal" },
    { name: "Exclusive" }
  ];
  ngOnInit(): void {
  }

}
