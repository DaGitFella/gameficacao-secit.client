import { Routes } from '@angular/router';
import {EventComponent} from "./components/pages/event/event.component";
import {HomeComponent} from "./components/pages/home/home.component";
import {StampsComponent} from "./components/pages/stamps/stamps.component";
import {RewardComponent} from "./components/pages/reward/reward.component";
import {ActivitiesComponent} from "./components/pages/activities/activities.component";
import {AchievementComponent} from "./components/pages/achievement/achievement.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'event', component: EventComponent},
  {path: 'stamps', component: StampsComponent},
  {path: 'reward', component: RewardComponent},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'achievement', component: AchievementComponent}
];
