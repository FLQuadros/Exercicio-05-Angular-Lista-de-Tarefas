import { style } from '@angular/animations';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[StyledBtn]'
})
export class StyledBtnDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = '#8D4AE7'
    this.el.nativeElement.style.color = 'white'
    this.el.nativeElement.style.textAlign = 'center'
    this.el.nativeElement.style.width = '110px'
    this.el.nativeElement.style.height = '40px'
   }

}
