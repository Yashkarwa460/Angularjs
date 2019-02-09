import { Directive, OnInit, HostBinding , HostListener } from '@angular/core';

@Directive({
  selector: this.newMethod()
})
export class MagicsDirective implements OnInit {
  constructor() { }

  @HostBinding('style.width.px')
  inpwdt: number

  private newMethod(): string {
    return '[appMagicinput]';
  }

  ngOnInit() {
    this.inpwdt = 50
  }

  @HostListener('mouseenter')
  msIn() {
    this.inpwdt = 500
  }

  @HostListener('mouseleave')
  msLv() {
    this.inpwdt = 100
  }


}
