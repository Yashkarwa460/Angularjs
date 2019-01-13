import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

institute = 'welcome to codekul'
  constructor() { }
  myClick(evDt : any ) {
    console.log(evDt)
  }
  ngOnInit() {
  }

}
