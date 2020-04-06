import { Component } from '@angular/core';

@Component({
  selector: 'calm-dark-bg',
  template: `
    <div class="bg-purple-darker">
      <ng-content></ng-content>
    </div>
  `,
})
export class DarkBgComponent {

}
