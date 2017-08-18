import { Component, OnInit } from '@angular/core';
import { Phone } from "../phone.model";

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phones : Phone[]=[
    new Phone('iphone 7', 'iphone 7 64gb storage','https://staticshop.o2.co.uk/product/images/iphone-7-plus-matt-black_sku-header.png?cb=2e5bd1802aec5fc0dcc12fa2a249e0b4','$629.74'),



  ];

  constructor() { }

  ngOnInit() {
  }

}
