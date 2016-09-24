import { Component } from '@angular/core';

import {ContactService} from './contact.service'

@Component({
    selector: 'my-app',
    template: `
      <courses></courses>
      <authors></authors>
      <cl-contact-list></cl-contact-list>
      <contact-form></contact-form>
    `,
    providers: [ContactService]
})

export class AppComponent { }
