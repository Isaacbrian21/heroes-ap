import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../core/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessagesService) { }

  ngOnInit(): void {
  }

  getMessages():void{
    this.messageService.getMessages()
  }


}
