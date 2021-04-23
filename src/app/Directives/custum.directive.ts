import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustum]',
})
export class CustumDirective {
  constructor(private myRef: ElementRef) {
    myRef.nativeElement.style.color = 'blue';
  }

  @HostListener('click') clickMe() {
    this.myRef.nativeElement.style.backgroundColor = this.color.bg;
    this.myRef.nativeElement.style.color = this.color.fg;
  }

  @Input('appCustum') color;
}
