import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFillNumbers]'
})
export class FillNumbersDirective implements OnInit{

  // Read array after `let n in` ... inside template file
  @Input('appFillNumbersIn') numbers!: number[];

  constructor(private container: ViewContainerRef, private template : TemplateRef<any>) { }
  
  ngOnInit(): void {
    for(let number of this.numbers){
      
      // returns an unit of template received with value of item
      this.container.createEmbeddedView(this.template, {$implicit:number});
    }

  }

  
}
