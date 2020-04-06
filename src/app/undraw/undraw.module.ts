import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UndrawTasksComponent } from './tasks/undraw-tasks.component';
import { UndrawPathComponent } from './path/undraw-path.component';
import { UndrawFriendsComponent } from './friends/undraw-friends.component';
import { UndrawCampfireComponent } from './campfire/undraw-campfire.component';

@NgModule({
  declarations: [
    UndrawTasksComponent,
    UndrawPathComponent,
    UndrawFriendsComponent,
    UndrawCampfireComponent
  ],
  exports: [
    UndrawTasksComponent,
    UndrawPathComponent,
    UndrawFriendsComponent,
    UndrawCampfireComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UndrawModule { }
