import { Component, OnInit } from '@angular/core';

import {ContactService} from './contact.service'
import {Contact} from './contact.model'

@Component({
  selector: 'cl-contact-list',
  templateUrl: 'app/contacts.component.html',
  styleUrls: ['app/contacts.component.css']
})

export class ContactsComponent implements OnInit {
  private contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  addContact(newContact: string) {
    this.contactService.addContact(newContact);
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }
}
