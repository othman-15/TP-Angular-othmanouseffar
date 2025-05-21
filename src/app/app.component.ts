import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  actions : Array<any> = [
    {title:"Home","route":"/home"},
    {title:"Products","route":"/products"},



  ]
CurrentAction:any;

  SetCurrentAction(action: any) {
    this.CurrentAction=action;
  }
}
