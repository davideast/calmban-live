import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CalmTask } from './task-card/task-card.component';


export interface CalmProject {
  id: string;
  name: string;
  mission: string;
}

export interface CalmCollaborator {
  role: 'editor' | 'admin';
}

@Component({
  selector: 'calm-project',
  templateUrl: './project.component.html',
  styles: [
    `calm-task-column:nth-child(odd) {
      background-color: #E6E6E6;
    }`,
    `calm-task-column {
      background-color: #F5F5F5;
      border-radius: 6px;
    }`
  ]
})
export class ProjectComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() { 
    const projectId = this.route.snapshot.params.projectId;
  }

  onNewTask(title: string) {
    
  }
  
}
