import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {KeyValuePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    KeyValuePipe,
    NgForOf,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navigateItems = {
    'Inicio': '/home',
    'Eventos': 'visualize_events',
    'Criar': 'create_event',
    'Selos': '/stamps'
  }

  originalOrder = (a: any, b: any): number => {
    return 0;
  };
}
