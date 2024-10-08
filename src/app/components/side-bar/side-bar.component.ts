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
      'Evento': "create_event",
      'Selos': "create_event/stamps",
      'Conquista': "create_event/reward",
      'Recompensas': "create_event/achievement",
      'Atividades': "create_event/activities"
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
