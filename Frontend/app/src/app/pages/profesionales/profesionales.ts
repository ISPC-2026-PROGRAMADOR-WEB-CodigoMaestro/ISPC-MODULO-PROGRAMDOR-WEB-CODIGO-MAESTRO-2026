import { Component } from '@angular/core';

@Component({
  selector: 'app-profesionales',
  imports: [],
  templateUrl: './profesionales.html',
  styleUrl: './profesionales.css',
})

export class Profesionales {

  profesionalesDestacados = [

    {
      nombre: 'Carlos Gómez',
      imagen: 'image/perfil1.jpg',
      oficio: '⚡ Electricista matriculado',
      ubicacion: '📍 Córdoba Capital',
      calificacion: '⭐ 4.9/5',
      experiencia: '🛠 8 años de experiencia'
    },

    {
      nombre: 'Matías Fernández',
      imagen: 'image/perfil2.jpg',
      oficio: '🪚 Carpintero profesional',
      ubicacion: '📍 Jesús María',
      calificacion: '⭐ 4.8/5',
      experiencia: '🛠 Muebles a medida'
    },

    {
      nombre: 'Luciano Pérez',
      imagen: 'image/perfil3.jpg',
      oficio: '🎨 Pintor de interiores',
      ubicacion: '📍 Villa Allende',
      calificacion: '⭐ 4.7/5',
      experiencia: '🏠 Hogares y oficinas'
    },

    {
      nombre: 'Javier Ruiz',
      imagen: 'image/perfil4.jpg',
      oficio: '🔧 Mecánico automotriz',
      ubicacion: '📍 Córdoba Capital',
      calificacion: '⭐ 4.9/5',
      experiencia: '🚗 Especialista en inyección'
    },

    {
      nombre: 'Fernando López',
      imagen: 'image/perfil5.jpg',
      oficio: '🚿 Plomero certificado',
      ubicacion: '📍 Alta Gracia',
      calificacion: '⭐ 4.8/5',
      experiencia: '🔩 Reparaciones y mantenimiento'
    },

    {
      nombre: 'Nicolás Díaz',
      imagen: 'image/perfil6.jpg',
      oficio: '❄ Técnico en climatización',
      ubicacion: '📍 Río Ceballos',
      calificacion: '⭐ 5.0/5',
      experiencia: '🧰 Instalación y service'
    }

  ];

}