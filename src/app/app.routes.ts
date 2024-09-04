import { Routes } from '@angular/router';
import {EventComponent} from "./components/pages/event/event.component";
import {HomeComponent} from "./components/pages/home/home.component";
import {StampsComponent} from "./components/pages/stamps/stamps.component";
import {RewardComponent} from "./components/pages/reward/reward.component";
import {ActivitiesComponent} from "./components/pages/activities/activities.component";
import {AchievementComponent} from "./components/pages/achievement/achievement.component";
import {VisualizeComponent} from "./components/pages/visualize/visualize.component";
import {SendComponent} from "./components/pages/send/send.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'event', component: EventComponent},
  {path: 'stamps', component: StampsComponent},
  {path: 'reward', component: RewardComponent},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'achievement', component: AchievementComponent},
  {path: 'visualize', component: VisualizeComponent},
  {path: 'send', component: SendComponent},
];
