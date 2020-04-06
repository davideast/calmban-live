import { Component } from '@angular/core';

@Component({ 
  selector: 'calm-spacer',
  template: `<ng-content></ng-content>`,
  host: { 'class': 'block mb-8' }
})
export class SpacerComponent { }
