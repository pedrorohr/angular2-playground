import {Component} from 'angular2/core'
import {Input} from 'angular2/core'
import {Output} from 'angular2/core'
import {EventEmitter} from 'angular2/core'
import {Contact} from './contact.model'

@Component({
  selector: 'contact',
  templateUrl: 'app/contact.component.html',
  styleUrls: ['app/contact.component.css']
})

export class ContactComponent {
  @Input()
  contact: Contact;
  @Output()
  onRemoveContact = new EventEmitter<Contact>();
  @Output()
  onStarContact = new EventEmitter<Contact>();

  removeContact(contact: Contact) {
    this.onRemoveContact.emit(contact);
  }

  starContact(contact: Contact) {
    this.onStarContact.emit(contact);
  }

}
