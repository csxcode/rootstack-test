import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-messages',
  templateUrl: './alert-messages.component.html',
  styleUrls: ['./alert-messages.component.scss']
})
export class AlertMessagesComponent implements OnInit {

  @Input() message?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
