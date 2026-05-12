import { Component } from '@angular/core';

import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',

  standalone: true,

  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],

  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

  links = [

    {
      nombre: 'Inicio',
      ruta: '/'
    },

    {
      nombre: 'Quiénes Somos',
      ruta: '/quienes-somos'
    },

    {
      nombre: 'Profesionales',
      ruta: '/profesionales'
    },

    {
      nombre: 'Regístrate',
      ruta: '/registro'
    }

  ];

}