import {Component, HostListener} from '@angular/core';
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
  showAccountMenu = false;

  toggleAccountMenu(): void {
    this.showAccountMenu = !this.showAccountMenu;
  }
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.showAccountMenu = false;
    }
  }

  SetCurrentAction(action: any) {
    this.CurrentAction=action;
  }
}
