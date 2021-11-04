import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown'; // include this for dropdown support
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor() { }
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
