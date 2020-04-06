import { Component } from '@angular/core';

@Component({
  selector: 'calm-scroll-area',
  template: `
  <div class="scroll-area overflow-x-scroll">
    <ng-content></ng-content>
  </div>
  `
})
export class ScrollAreaComponent { }
