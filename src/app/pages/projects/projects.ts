import { Component, input } from '@angular/core';
import { Card } from '../../shared/card/card';
import { ICards } from '../../core/interface/icards';

@Component({
  selector: 'nsj-projects',
  imports: [Card],
  templateUrl: './projects.html',
 
})
export class Projects {
  mostrar = false;
  projects = input<ICards[]>([
    {
      type: 'Featured Project',
      name: 'E-commerce Platform',
      description:
        'Developed a full-fledged e-commerce platform with user authentication, product management, and payment integration.',
      url: 'https://nsj.com',
    },
    {
      type: 'Personal Project',
      name: 'Task Management App',
      description:
        'Created a task management application to help users organize their daily tasks and track their progress.',
      url: 'https://nsj.com',
    },
  ]);
}
