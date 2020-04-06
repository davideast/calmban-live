import { Component, Input } from '@angular/core';

export interface CalmTask {
  id?: string;
  title: string;
  category: string;
  index?: number;
  userId: string;
  photoURL: string;
}

@Component({
  selector: 'calm-task-card',
  templateUrl: './task-card.component.html',
})
export class TaskCardComponent {
  @Input() task: CalmTask;
}
