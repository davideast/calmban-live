import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'calm-task-column',
  templateUrl: './task-column.component.html'
})
export class TaskColumnComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() { }

}
