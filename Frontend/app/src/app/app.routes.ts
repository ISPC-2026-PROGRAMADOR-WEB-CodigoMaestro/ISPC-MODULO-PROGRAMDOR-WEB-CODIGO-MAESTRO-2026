import { Routes } from '@angular/router';


import { QuienesSomos } from './pages/quienes-somos/quienes-somos';
import { Home } from './pages/home/home';
import { Registro } from './pages/registro/registro';
import { Dashboard } from './pages/dashboard/dashboard';
import { Profesionales } from './pages/profesionales/profesionales';


export const routes: Routes = [

  { path: '', component: Home },

  { path: 'quienes-somos', component: QuienesSomos },

  { path: 'registro', component: Registro },

  { path: 'dashboard', component: Dashboard },

  { path: 'profesionales', component: Profesionales },

];
