import { Component } from '@angular/core'
import { MessagesService } from './messages.service'
import { AutoGrowDirective } from './auto-grow.directive'

@Component({
  selector: 'messages',
  template: `
    <h2>Messages</h2>
    <h3>{{ title }}</h3>
    <label for="message">Send Message</label>
    <input type="text" name="message" autoGrow>
    <ul>
      <li *ngFor="let m of messages">{{ m }}</li>
    </ul>
  `,
  providers: [MessagesService]
})

export class MessagesComponent {
  title = "Enter a message";
  messages;

  constructor(messagesService: MessagesService) {
    this.messages = messagesService.getMessages();
  }
}
