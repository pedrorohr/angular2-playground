import { Component } from '@angular/core';

import {FormGroup} from '@angular/forms';

import { Contact } from './contact.model';
import {ContactService} from './contact.service'

@Component({
  selector: 'contact-form',
  templateUrl: 'app/contact-form.component.html'
})
export class ContactFormComponent {

  model = new Contact(0, 'Pedro Guilherme Rohr', '+55 51 9831-0615');
  submitted = false;
  myForm: FormGroup;

  constructor(public contactService: ContactService) {}

  onSubmit() {
    this.contactService.addContact(this.model.name);
    this.submitted = true;
  }

  newContact() {
    this.model = new Contact(42, '', '');
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

}
