import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {
  
  isOpen = false;
  constructor(private elementRef : ElementRef , private renderer : Renderer2) { }


  @HostListener('click') toggleOpen()
  {
    const dropdn = this.elementRef.nativeElement.nextElementSibling
    if(!this.isOpen)
    {
      this.renderer.addClass(dropdn,'show')
    }
    else{
      this.renderer.removeClass(dropdn,'show')
    }
    this.isOpen = !this.isOpen;
  }
 

}
