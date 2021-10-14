import { Directive, ElementRef, HostListener, } from '@angular/core';
//  HostListener and used it to define the events that will be initiated by user actions, the first one being a click that creates a line-through and the second one being a double click which changes the text-decoration to none thus removing the line-through.

@Directive({
  selector: '[appStrikethrough]',
})
export class StrikethroughDirective {
  constructor(private elem: ElementRef) {}
  
  @HostListener('click') onClicks() {
    this.textDeco('line-through');
  }

  @HostListener('dblclick') onDoubleClicks() {
    this.textDeco('None');
  }

  private textDeco(action: string) {
    this.elem.nativeElement.style.textDecoration = action;
  }
}
