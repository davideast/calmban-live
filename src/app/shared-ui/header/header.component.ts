import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface CalmUser {
  userId: string;
  photoURL: string;
}

@Component({
  selector: 'calm-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Input() user: CalmUser;
  @Output('sign-in') signIn = new EventEmitter<void>();

  sendSignIn() {
    this.signIn.emit();
  }

}
