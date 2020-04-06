import { Component } from '@angular/core';

@Component({
  selector: 'calm-light-bg',
  template: `
  <div class="bg-white">
    <ng-content></ng-content>
  </div>
  `
})
export class LightBgComponent {

}
