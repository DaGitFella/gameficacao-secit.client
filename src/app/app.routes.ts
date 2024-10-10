import { Routes } from '@angular/router';
import {EventComponent} from "./components/pages/event/event.component";
import {HomeComponent} from "./components/pages/home/home.component";
import {StampsComponent} from "./components/pages/stamps/stamps.component";
import {RewardComponent} from "./components/pages/reward/reward.component";
import {ActivitiesComponent} from "./components/pages/activities/activities.component";
import {AchievementComponent} from "./components/pages/achievement/achievement.component";
import {VisualizeEventComponent} from "./components/pages/visualize-event/visualize-event.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create_event', component: EventComponent},
  {path: 'create_event/stamps', component: StampsComponent},
  {path: 'create_event/reward', component: RewardComponent},
  {path: 'create_event/activities', component: ActivitiesComponent},
  {path: 'create_event/achievement', component: AchievementComponent},
  {path: 'visualize_events', component: VisualizeEventComponent}
];
