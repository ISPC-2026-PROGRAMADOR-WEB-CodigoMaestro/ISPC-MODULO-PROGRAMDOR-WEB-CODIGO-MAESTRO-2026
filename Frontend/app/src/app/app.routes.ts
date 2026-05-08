import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { Dashboard } from './features/dashboard/dashboard';
import { QuienesSomos } from './features/quienes-somos/quienes-somos';

export const routes: Routes = [

  { path: '', component: Home },

  { path: 'dashboard', component: Dashboard },

  { path: 'quienes-somos', component: QuienesSomos }

];
