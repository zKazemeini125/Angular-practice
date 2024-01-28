import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeater]',
})
export class RepeaterDirective {
  @Input('appRepeater') set repete(time: number) {
    for (let i = 0; i < time; i++) {
      this.vcRef.createEmbeddedView(this.templateRef);
      iedex: i;
      console.log(i);
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
