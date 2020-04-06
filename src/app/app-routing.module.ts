import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'project/:projectId', 
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
