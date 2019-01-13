import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

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
  alSts = {
    iswarning: false,
    issuccess: false,
    isinfo: false,
    isdanger: false
  }
  myAl(wh : string){
    if(wh === 'warning'){
      this.alSts.iswarning = true
      this.alSts.issuccess = false
      this.alSts.isdanger = false
      this.alSts.isinfo = false
    } else if(wh === 'success'){

      this.alSts.iswarning = false
      this.alSts.issuccess = true
      this.alSts.isdanger = false
      this.alSts.isinfo = false
    } else if(wh === 'danger'){

      this.alSts.iswarning = false
      this.alSts.issuccess = false
      this.alSts.isdanger = true
      this.alSts.isinfo = false
    } else{
      
      this.alSts.iswarning = false
      this.alSts.issuccess = false
      this.alSts.isdanger = false
      this.alSts.isinfo = true
    }
  }
  ngOnInit() {
  }

}
