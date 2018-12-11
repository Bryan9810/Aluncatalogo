import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-jops',
  templateUrl: './jops.component.html',
  styleUrls: ['./jops.component.css']
})
export class JopsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.tabs').tabs();
  }

}
