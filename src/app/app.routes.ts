import { Routes } from '@angular/router';

import { LeagueStandingsListComponent } from './components/league-standings-list/league-standings-list.component';
import { NotFoundComponent } from './components/404/404.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Home Page',
    component: LeagueStandingsListComponent,
  },
  {
    path: '**',
    title: 'Not Found Page',
    component: NotFoundComponent,
  },
];
