import { Component } from '@angular/core';

@Component({
  selector: 'calm-main-section',
  template: `
    <div class="container mx-auto p-16 flex items-center justify-between">
      <ng-content></ng-content>
    </div>
  `
})
export class MainSectionComponent {

}
