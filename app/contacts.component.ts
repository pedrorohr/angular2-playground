import {Component} from 'angular2/core'
import {ContactsService} from './contacts.service'
import {ContactComponent} from './contact.component'
import {Contact} from './contact.model'

@Component({
  selector: 'contacts',
  templateUrl: 'app/contacts.component.html',
  styleUrls: ['app/contacts.component.css'],
  providers: [ContactsService],
  directives: [ContactComponent]
})

export class ContactsComponent {
  contacts: Contact[] = [];

  constructor(contactsService: ContactsService) {
    this.contacts = contactsService.getContacts();
  }

  addContact(newContact: string) {
    this.contacts.push({
      id: 4,
      name: newContact,
      star: false
    });
  }

  removeContact(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

  starContact(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts[index].star = !this.contacts[index].star;
  }

}
