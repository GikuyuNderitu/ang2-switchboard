import { Component, OnInit, Input } from '@angular/core';
import { Switch } from './switch';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.sass']
})
export class SwitchComponent implements OnInit {
  @Input() switch: Switch;
  on : boolean;
  constructor() { }

  ngOnInit() {
    this.on = this.switch.on;
  }

  toggle() {
    this.on = this.on ? false : true;
  }

}
