import {Directive, ElementRef, Renderer} from '@angular/core'

@Directive({
  selector: '[autoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})

export class AutoGrowDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer) {

  }

  onFocus() {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'width', '200');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', '#333');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'color', '#fff');
  }

  onBlur() {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'width', '120');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'fff');
  }
}
