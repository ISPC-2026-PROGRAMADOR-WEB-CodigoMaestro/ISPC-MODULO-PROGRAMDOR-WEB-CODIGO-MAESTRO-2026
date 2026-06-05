import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  imports: [],
  templateUrl: './dashboard-admin.html',
  styleUrl: './dashboard-admin.css',
})
export class DashboardAdmin {

  estadisticas = [
    {
      titulo: 'Usuarios',
      cantidad: 120,
      icono: '👥'
    },
    {
      titulo: 'Profesionales',
      cantidad: 45,
      icono: '🛠'
    },
    {
      titulo: 'Oficios',
      cantidad: 18,
      icono: '📋'
    },
    {
      titulo: 'Ubicaciones',
      cantidad: 8,
      icono: '📍'
    }
  ];

  secciones = [
    {
      titulo: 'Acciones Administrativas',
      parrafos: [],
      items: [
        'Gestionar usuarios registrados.',
        'Gestionar profesionales disponibles.',
        'Administrar oficios cargados en el sistema.',
        'Consultar estadísticas generales de la plataforma.'
      ]
    },
    {
      titulo: 'Actividad Reciente',
      parrafos: [],
      items: [
        'Nuevo profesional registrado en Electricidad.',
        'Nueva ubicación agregada al sistema.',
        'Actualización de información de usuarios.',
        'Incorporación de nuevos oficios disponibles.'
      ]
    }
  ];

}