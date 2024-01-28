import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBox]',
})
export class BoxDirective {
  @Input('appBox') set box(value: string) {
    console.log(value);
    //this.elementRef.nativeElement.style.backgrundColor=
  }
  constructor(private elementRef: ElementRef) {}
}
