import { Routes } from '@angular/router';
import {EventComponent} from "./components/pages/event/event.component";
import {HomeComponent} from "./components/pages/home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'event', component: EventComponent}
];
