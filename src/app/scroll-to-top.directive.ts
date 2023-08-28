import { Directive, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Directive({
  selector: '[scrollToTop]'
})
export class ScrollToTopDirective {
  constructor(private el: ElementRef) { }

  @HostListener('click')
  onClick() {
    // Xử lý logic cuộn lên đầu trang ở đây
    window.scrollTo(0, 0);
  }
}
