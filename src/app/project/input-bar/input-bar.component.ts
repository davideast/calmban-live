import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'calm-input-bar',
  template: `
    <div class="container mx-auto px-16">
      <calm-heading text="purple-darker" text-size="xl">
        {{ placeholder }}
      </calm-heading>
      <div class="h-12 w-full flex">
        <input 
          #newValue
          (keydown.enter)="sendValue(newValue)"
          type="text" 
          class="bg-grey-light h-12 px-2 font-body w-full rounded-sm" />
        <button 
          (click)="sendValue(newValue)"
          style="left: -2px;"
          class="relative bg-purple rounded-sm text-white w-24 h-12 font-display font-bold text-lg">
          {{ buttonText }}  
        </button>
      </div>
    </div>
  `
})
export class InputBarComponent {

  @Input() placeholder: string;
  @Input() buttonText: string;
  @Output('new-value') newValue = new EventEmitter<string>();

  sendValue(input: HTMLInputElement) {
    this.newValue.emit(input.value);
    input.value = '';
  }

}
