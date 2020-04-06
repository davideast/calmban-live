import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedUiModule } from '../shared-ui/shared-ui.module';
import { ProjectRoutingModule } from './project-routing.module';

import { ProjectComponent } from './project.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskColumnComponent } from './task-column/task-column.component';
import { ScrollAreaComponent } from './scroll-area/scroll-area.component';
import { BoardComponent } from './board/board.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { InputBarComponent } from './input-bar/input-bar.component';

import { environment } from '../../environments/environment';

@NgModule({
  declarations: [ProjectComponent, TaskCardComponent, TaskListComponent, TaskColumnComponent, ScrollAreaComponent, BoardComponent, ProjectDetailsComponent, InputBarComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedUiModule,
    DragDropModule, 
  ]
})
export class ProjectModule { }
