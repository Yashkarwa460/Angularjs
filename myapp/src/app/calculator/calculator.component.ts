import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calcNum = ''
  constructor() { }

  ngOnInit() {
  }

  calC(num: number) {
    this.calcNum += num
  }

  CE() {
    this.calcNum = ''
  }

  mkEql() {
    this.calcNum = eval(this.calcNum)
  }
}
