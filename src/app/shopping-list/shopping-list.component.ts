import { Component, OnInit } from '@angular/core';
import { accesory} from '../shared/accesory.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  accesory: accesory[] = [
     new accesory('HearPods', 1),
     new accesory('case', 1),


  ];


  constructor() { }

  ngOnInit() {
  }

}
