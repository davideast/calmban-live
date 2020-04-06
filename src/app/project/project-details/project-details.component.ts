import { Component, Input } from '@angular/core';
import { CalmProject } from '../project.component';

@Component({
  selector: 'calm-project-details',
  template: `
  <div class="container mx-auto px-16 my-8 flex flex-col items-start lg:flex-row xl:flex-row lg:justify-between lg:items-center xl:justify-between xl:items-center">
    <calm-heading text="purple-darker" text-size="2xl">
      {{ project.name }}
    </calm-heading>
    <p class="">
      {{ project.mission }}
    </p>
  </div>
  `
})
export class ProjectDetailsComponent {
  @Input() project: CalmProject;
}
