import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appImagezoom]'
})
export class ImagezoomDirective implements OnInit{

  @HostBinding('style.width.px')
  bkCl: number

  constructor() { }

  ngOnInit() {
    this.bkCl = 100
  }

  magicColor() {
    this.bkCl =  500
  }

    @HostListener('mouseenter')
    msIn() {
      this.bkCl = 500
    }
  // tslint:disable-next-line:no-trailing-whitespace
  
    @HostListener('mouseleave')
    msLv() {
      this.bkCl = 100
    }

}
