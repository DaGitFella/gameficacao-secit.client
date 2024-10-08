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
      'bi-house-fill': "create_event",
      'bi-image-alt': "create_event/stamps",
      'bi-star-fill': "create_event/reward",
      'bi-trophy-fill': "create_event/achievement",
      'bi-book-half': "create_event/activities"
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
