import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  @Input('appClass') set addClass(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.elementRef.nativeElement.classList.add(key);
      } else {
        this.elementRef.nativeElement.classList.remove(key);
      }
    }
  }
  constructor(private elementRef: ElementRef) {}
}
