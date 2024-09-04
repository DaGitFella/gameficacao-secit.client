import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {KeyValuePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NgForOf,
    KeyValuePipe,
    RouterLinkActive
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  navigateItems =
    {
      'Evento': "/event",
      'Selos': "/stamps",
      'Conquista': "/reward",
      'Recompensas': "/achievement",
      'Atividades': "/activities"
    }
  ;

  visualizeItems = {
    "Pré-visualizar": "/visualize",
   "Enviar": "/send"
  };

  originalOrder = (a: any, b: any): number => {
    return 0;
  };

}
