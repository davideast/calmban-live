import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CalmUser } from '../shared-ui/header/header.component';
import { Observable, of } from 'rxjs';
import { mapFirebaseUser } from '../creators';
import { map, mergeMap, tap } from 'rxjs/operators';

interface UserProject {
  id: string;
}

@Component({
  selector: 'calm-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  user$: Observable<CalmUser>;
  projects$: Observable<UserProject[]>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() { 
    const usersCol = this.afs.collection('users');

    this.user$ = mapFirebaseUser(this.afAuth.user);
    this.projects$ = this.user$.pipe(
      tap(user => console.log(user)),
      map(user => usersCol.doc(user.userId)),
      map(userDoc => userDoc.collection<UserProject>('projects')),
      mergeMap(projectsCol => projectsCol.valueChanges()),
    );
  } 

  createLink(id: string) {
    return `/project/${id}`;
  }

}
