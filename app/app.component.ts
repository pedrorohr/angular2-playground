import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {ContactsComponent} from './contacts.component'

@Component({
    selector: 'my-app',
    template: `
      <courses></courses>
      <authors></authors>
      <contacts></contacts>
    `,
    directives: [CoursesComponent, AuthorsComponent, ContactsComponent]
})
export class AppComponent { }
