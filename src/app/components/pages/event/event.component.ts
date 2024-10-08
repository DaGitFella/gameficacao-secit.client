import { Component } from '@angular/core';
import {SideBarComponent} from "../../side-bar/side-bar.component";

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    SideBarComponent
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

}
