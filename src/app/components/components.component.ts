import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.tabs').tabs();
  }

}
