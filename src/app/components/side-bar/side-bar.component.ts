import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {KeyValuePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NgForOf,
    KeyValuePipe
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

  visualizeItems = ["Pré-visualizar", "Enviar"];
  selectedNavigateIndex: number | null = null;
  selectedVisualizeIndex: number | null = null;

  originalOrder = (a: any, b: any): number => {
    return 0;  // Returning 0 maintains the original order
  };

  selectedItem(index: number, isVisualize: boolean = false): void {
    if (isVisualize) {
      this.selectedVisualizeIndex = index;
      this.selectedNavigateIndex = null;
    } else {
      this.selectedNavigateIndex = index;
      this.selectedVisualizeIndex = null;
    }
  }
}
