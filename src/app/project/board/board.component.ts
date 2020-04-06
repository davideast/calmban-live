import { Component } from '@angular/core';

@Component({
  selector: 'calm-board',
  template: `
    <div style="width: 1440px" class="board min-h-screen container mx-16 lg:mx-32 xl:mx-32 py-4 flex">
      <ng-content></ng-content>
    </div>
  `
})
export class BoardComponent { }
