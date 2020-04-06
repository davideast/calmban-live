import { Component, Input } from '@angular/core';
import { CalmTask } from '../task-card/task-card.component';

@Component({
  selector: 'calm-task-list',
  styles: [
    `.placeholder {
      background: #ccc;
      border: dotted 3px #999;
      min-height: 220px;
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      margin: 2rem 0;
    }`
  ],
  template: `
  <div *ngFor="let task of tasks" cdkDrag>

    <div>
      <div class="placeholder" *cdkDragPlaceholder></div>
      <calm-task-card [task]="task"></calm-task-card>
      <div class="mb-8"></div>
    </div>

  </div>
  `
})
export class TaskListComponent {
  @Input() tasks: CalmTask[];
}
