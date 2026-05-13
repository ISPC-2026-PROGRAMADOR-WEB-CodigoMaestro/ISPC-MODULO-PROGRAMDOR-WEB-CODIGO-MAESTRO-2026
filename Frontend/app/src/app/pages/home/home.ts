import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  titulo = 'Bienvenido a ServiMatch';

  descripcion = 'Encontrá profesionales confiables de forma rápida y segura';

  textoBoton = 'Buscar servicios';

  beneficios = [
    {
      icono: '🔒',
      titulo: 'Seguridad',
      descripcion: 'Profesionales verificados para tu tranquilidad.',
      clase: 'sectionSeguridad'
    },
    {
      icono: '⭐',
      titulo: 'Calificaciones',
      descripcion: 'Opiniones reales de usuarios.',
      clase: 'sectionCalificaciones'
    },
    {
      icono: '📍',
      titulo: 'Ubicación',
      descripcion: 'Encontrá servicios cerca tuyo.',
      clase: 'sectionUbicacion'
    }
  ];

  imagenesCarrusel = [
    {
      src: 'image/albanil.jpg',
      alt: 'Albañil'
    },
    {
      src: 'image/carpintero.jpg',
      alt: 'Carpintero'
    },
    {
      src: 'image/pintor.jpg',
      alt: 'Pintor'
    },
    {
      src: 'image/electricista.jpg',
      alt: 'Electricista'
    },
    {
      src: 'image/mecanico.jpg',
      alt: 'Mecánico'
    }
  ];

}