import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'calm-heading',
  template: `<ng-content></ng-content>`,
  host: {
    'class': 'font-display font-bold block'
  }
})
export class HeadingComponent {

  @Input('text-size') textSize: 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' = '6xl';
  @Input('text-align') align: 'left' | 'right' | 'center' = 'left';
  @Input() text: 'black' | 'purple-darker' | 'grey-light' = 'black';

  @HostBinding('class.text-lg') 
  get textLg(): boolean {
    return this.textSize === 'lg';
  }  

  @HostBinding('class.text-xl') 
  get textXl(): boolean {
    return this.textSize === 'xl';
  }

  @HostBinding('class.text-2xl') 
  get text2xl(): boolean {
    return this.textSize === '2xl';
  }  

  @HostBinding('class.text-3xl') 
  get text3xl(): boolean {
    return this.textSize === '3xl';
  }  

  @HostBinding('class.text-4xl') 
  get text4xl(): boolean {
    return this.textSize === '4xl';
  }  

  @HostBinding('class.text-5xl') 
  get text5xl(): boolean {
    return this.textSize === '5xl';
  }

  @HostBinding('class.text-6xl') 
  get text6xl(): boolean {
    return this.textSize === '6xl';
  }  

  @HostBinding('class.text-left') 
  get alignLeft(): boolean {
    return this.align === 'left';
  }

  @HostBinding('class.text-right') 
  get alignRight(): boolean {
    return this.align === 'right';
  }

  @HostBinding('class.text-center') 
  get alignCenter(): boolean {
    return this.align === 'center';
  }

  @HostBinding('class.text-grey-light') 
  get textGreyLight(): boolean {
    return this.text === 'grey-light';
  }

  @HostBinding('class.text-purple-darker') 
  get textPurpleDarker(): boolean {
    return this.text === 'purple-darker';
  }

  @HostBinding('class.text-black') 
  get textBlack(): boolean {
    return this.text === 'black';
  }

}
