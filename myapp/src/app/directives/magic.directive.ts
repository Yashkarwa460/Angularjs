import { Directive, OnInit,  HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMagic]'
})
export class MagicDirective implements OnInit {

  @HostBinding('style.background')
  bkCl: string

  @Input()
  // tslint:disable-next-line:typedef-whitespace
  dfCl : string

  constructor() { }

  ngOnInit() {
    this.bkCl = this.dfCl
  }

  magicColor() {
    this.bkCl =  `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)} )`
  }

    @HostListener('mouseenter')
    msIn() {
      this.magicColor()
    }
  // tslint:disable-next-line:no-trailing-whitespace
  
    @HostListener('mouseleave')
    msLv() {
      this.magicColor()
    }

}
