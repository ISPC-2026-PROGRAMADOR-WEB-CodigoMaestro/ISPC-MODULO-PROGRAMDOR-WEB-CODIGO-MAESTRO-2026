import { Routes } from '@angular/router';
import { QuienesSomos } from './pages/institucional/quienes-somos/quienes-somos';
import { Home } from './pages/home/home';
import { Registro } from './pages/auth/registro/registro';
import { Profesionales } from './pages/profesionales/listado-profesionales/listado-profesionales';
import { Login } from './pages/auth/login/login';
import { DetalleProfesional } from './pages/profesionales/detalle-profesional/detalle-profesional';
import { DashboardEstandar } from './pages/dashboard/dashboard-estandar/dashboard-estandar';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'quienes-somos', component: QuienesSomos },
  { path: 'registro', component: Registro },
  { path: 'profesionales', component: Profesionales },
  { path: 'login', component: Login },
  { path: 'detalle-profesional/:id', component: DetalleProfesional },
  { path: 'dashboard-estandar', component: DashboardEstandar },

  { path: '**', redirectTo: 'home' }

];
