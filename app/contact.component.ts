import { Component, Input } from '@angular/core';

import {Contact} from './contact.model'
import { ContactService } from './contact.service';

@Component({
  selector: 'cl-contact',
  templateUrl: 'app/contact.component.html',
  styleUrls: ['app/contact.component.css']
})

export class ContactComponent {
  @Input() contact: Contact;

  constructor(private contactService: ContactService) {}

  removeContact(contact: Contact) {
    this.contactService.removeContact(contact);
  }

  starContact(contact: Contact) {
    this.contactService.starContact(contact);
  }
}
