import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.css'],
})
export class AlertPage implements OnInit {
  alertButtons = ['Salir'];

  constructor() { }

  ngOnInit() {
  }

}
