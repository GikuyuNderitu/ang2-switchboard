import { Component } from '@angular/core';
import { Switch } from './switch/switch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  switches : Array<Switch> = [
    new Switch(false),
    new Switch(false),
    new Switch(false),
    new Switch(false),
    new Switch(false),
    new Switch(false),
    new Switch(false),
    new Switch(false),
    new Switch(false),
    new Switch(false),
  ]
}
