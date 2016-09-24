import {Component} from '@angular/core'

import {CoursesService} from './courses.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    {{ title }}
    <input type="text" autoGrow />
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    `,
  providers: [CoursesService]
})

export class CoursesComponent {
  title: string = "The title of courses page";
  courses: string[];

  constructor(coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }
}
