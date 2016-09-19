import {Component} from 'angular2/core'
import {CoursesService} from './courses.service'

@Component({
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    {{ title }}
    <ul>
      <li *ngFor="#course of courses">
        {{ course }}
      </li>
    </ul>
    `,
  providers: [CoursesService]
})

export class CoursesComponent {
  title: string = "The title of courses page";
  courses;

  constructor(coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }
}
