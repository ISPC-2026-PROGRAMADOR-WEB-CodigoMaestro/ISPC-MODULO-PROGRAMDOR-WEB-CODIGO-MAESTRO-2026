import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-profesional',
  imports: [],
  templateUrl: './detalle-profesional.html',
  styleUrl: './detalle-profesional.css',
})
export class DetalleProfesional {

  profesional: any;

  profesionales = [
    {
      id: 1,
      nombre: 'Carlos Gómez',
      oficio: 'Electricista',
      ubicacion: 'Córdoba Capital',
      experiencia: '8 años de experiencia',
      telefono: '351-4567890',
      jornada: 'Lunes a sábados de 08:00 a 18:00 hs.',
      pagos: 'Efectivo, transferencia bancaria y Mercado Pago.',
      descripcion: 'Especialista en instalaciones eléctricas domiciliarias e industriales.',
        
      trabajos: [
        
        {
          imagen: '/image/trabajo-electricista-1.png',
          titulo: 'Armado de tablero eléctrico',
          descripcion: 'Instalación segura y ordenada de tablero domiciliario.'
        },
        
        {
          imagen: '/image/trabajo-electricista-2.png',
          titulo: 'Reparación de cortocircuito',
          descripcion: 'Diagnóstico y solución de fallas eléctricas con seguridad.'
        },
        
        {
          imagen: '/image/trabajo-electricista-3.png',
          titulo: 'Instalación de iluminación LED',
          descripcion: 'Colocación de luces LED eficientes y estéticas.'
        }
      ],

      valoraciones: [
    {
      criterio: 'Puntualidad',
      porcentaje: 95
    },
    {
      criterio: 'Relación calidad/precio',
      porcentaje: 90
    },
    {
      criterio: 'Experiencia técnica',
      porcentaje: 98
    },
    {
      criterio: 'Comunicación',
      porcentaje: 92
    }
  ],

  resenas: [
    {
      nombre: 'Ana Martínez',
      comentario: 'Carlos resolvió el problema eléctrico de mi casa en tiempo récord. Muy profesional y ordenado.',
      servicio: 'Instalación eléctrica'
    },
    {
      nombre: 'Diego Herrera',
      comentario: 'Excelente trabajo en el tablero eléctrico. Explicó todo el proceso y dejó todo impecable.',
      servicio: 'Armado de tablero'
    },
    {
      nombre: 'Valeria Ríos',
      comentario: 'Muy buen profesional, rápido y prolijo. El precio fue justo y el resultado excelente.',
      servicio: 'Iluminación LED'
    }
  ]

    },

    {
      id: 2,
      nombre: 'Matías Fernández',
      oficio: 'Carpintero',
      ubicacion: 'Jesús María',
      experiencia: '10 años de experiencia',
      telefono: '3525-445566',
      jornada: 'Lunes a viernes de 09:00 a 18:00 hs.',
      pagos: 'Efectivo, transferencia bancaria y Mercado Pago.',
      descripcion: 'Especialista en fabricación de muebles, aberturas y trabajos de carpintería a medida.',
      
      trabajos: [
        
        {
          imagen: '/image/trabajo-carpintero-1.png',
          titulo: 'Construcción de mueble',
          descripcion: 'Fabricación y ensamblaje de muebles de madera.'
        },
        
        {
          imagen: '/image/trabajo-carpintero-2.png',
          titulo: 'Reparación de puertas',
          descripcion: 'Reemplazo y reparación de puertas de madera.'
        },

        {
          imagen: '/image/trabajo-carpintero-3.png',
          titulo: 'Instalación de pisos de madera',
          descripcion: 'Colocación profesional de pisos flotantes o parquet.'
        }
      ],

      valoraciones: [
    {
      criterio: 'Puntualidad',
      porcentaje: 90
    },
    {
      criterio: 'Relación calidad/precio',
      porcentaje: 95
    },
    {
      criterio: 'Experiencia técnica',
      porcentaje: 85
    },
    {
      criterio: 'Comunicación',
      porcentaje: 98
    }
  ],

    resenas: [
    {
      nombre: 'Laura García',
      comentario: 'Excelente trabajo, muy prolijo y puntual. El mueble quedó exactamente como lo pedí.',
      servicio: 'Carpintería a medida'
    },
    {
      nombre: 'Martín Cabrera',
      comentario: 'Nos hizo las puertas de toda la casa, quedaron perfectas. Muy recomendable.',
      servicio: 'Reparación de puertas'
    },
    {
      nombre: 'Paula Juárez',
      comentario: 'Instaló el piso de madera en tiempo y forma. Muy atento y con buena comunicación.',
      servicio: 'Pisos de madera'
    }
  ]

    },

    {
      id: 3,
      nombre: 'Luciano Pérez',
      oficio: 'Pintor',
      ubicacion: 'Villa Allende',
      experiencia: '6 años de experiencia',
      telefono: '351-7788990',
      jornada: 'Lunes a sábados de 08:00 a 17:00 hs.',
      pagos: 'Efectivo y billeteras virtuales.',
      descripcion: 'Profesional dedicado a pintura de interiores, exteriores y terminaciones decorativas.',
      
      trabajos: [
        
        {
          imagen: '/image/trabajo-pintor-1.png',
          titulo: 'Pintura de interiores',
          descripcion: 'Renovación de ambientes con pintura de calidad.'
        },
        
        {
          imagen: '/image/trabajo-pintor-2.png',
          titulo: 'Pintura de exteriores',
          descripcion: 'Protección y embellecimiento de fachadas.'
        },

        {
          imagen: '/image/trabajo-pintor-3.png',
          titulo: 'Pintura decorativa',
          descripcion: 'Técnicas especiales para acabados únicos.'
        }
      ],

      valoraciones: [
    {
      criterio: 'Puntualidad',
      porcentaje: 85
    },
    {
      criterio: 'Relación calidad/precio',
      porcentaje: 97
    },
    {
      criterio: 'Experiencia técnica',
      porcentaje: 80
    },
    {
      criterio: 'Comunicación',
      porcentaje: 85
    }
  ],

    resenas: [
    {
      nombre: 'Roberto Sánchez',
      comentario: 'Pintó toda la fachada en dos días. Terminaciones impecables y muy buen precio.',
      servicio: 'Pintura de exteriores'
    },
    {
      nombre: 'Gabriela Molina',
      comentario: 'Pintó el living y los dormitorios, quedó hermoso. Muy limpio y ordenado mientras trabajaba.',
      servicio: 'Pintura de interiores'
    },
    {
      nombre: 'Tomás Aguirre',
      comentario: 'Hizo una textura decorativa en el comedor que quedó espectacular. Muy creativo.',
      servicio: 'Pintura decorativa'
    }
  ]

    },

    {
      id: 4,
      nombre: 'Javier Ruiz',
      oficio: 'Mecánico',
      ubicacion: 'Córdoba Capital',
      experiencia: '12 años de experiencia',
      telefono: '351-2233445',
      jornada: 'Lunes a viernes de 08:00 a 19:00 hs.',
      pagos: 'Efectivo, débito, crédito y transferencias.',
      descripcion: 'Especialista en diagnóstico automotriz, reparación de motores y mantenimiento integral.',
      
      trabajos: [
        
        {
          imagen: '/image/trabajo-mecanico-1.png',
          titulo: 'Reparación de motor',
          descripcion: 'Diagnóstico y reparación de fallas en motores.'
        },
        
        {
          imagen: '/image/trabajo-mecanico-2.png',
          titulo: 'Cambio de frenos',
          descripcion: 'Sustitución profesional de pastillas y discos.'
        },

        {
          imagen: '/image/trabajo-mecanico-3.png',
          titulo: 'Service completo',
          descripcion: 'Mantenimiento integral para el buen funcionamiento del vehículo.'
        }
      ],

      valoraciones: [
    {
      criterio: 'Puntualidad',
      porcentaje: 80
    },
    {
      criterio: 'Relación calidad/precio',
      porcentaje: 95
    },
    {
      criterio: 'Experiencia técnica',
      porcentaje: 85
    },
    {
      criterio: 'Comunicación',
      porcentaje: 92
    }
  ],

    resenas: [
    {
      nombre: 'Marcelo Torres',
      comentario: 'Llevé el auto con un problema que nadie había podido resolver y Javier lo solucionó el mismo día.',
      servicio: 'Diagnóstico automotriz'
    },
    {
      nombre: 'Cecilia Navarro',
      comentario: 'Cambió los frenos del auto de manera rápida y segura. Precio muy razonable.',
      servicio: 'Cambio de frenos'
    },
    {
      nombre: 'Gustavo Peralta',
      comentario: 'Hizo el service completo del auto, todo quedó en perfecto estado. Muy profesional.',
      servicio: 'Service completo'
    }
  ]

    },

    {
      id: 5,
      nombre: 'Fernando López',
      oficio: 'Plomero',
      ubicacion: 'Alta Gracia',
      experiencia: '9 años de experiencia',
      telefono: '3547-556677',
      jornada: 'Lunes a sábados de 07:00 a 18:00 hs.',
      pagos: 'Efectivo, transferencias y Mercado Pago.',
      descripcion: 'Realizo instalaciones sanitarias, reparación de cañerías y mantenimiento domiciliario.',

      trabajos: [
        
        {
          imagen: '/image/trabajo-plomero-1.png',
          titulo: 'Instalación de termotanque solar',
          descripcion: 'Colocación completa de sistema solar térmico con conexiones seguras y optimización energética.'
        },
        
        {
          imagen: '/image/trabajo-plomero-2.png',
          titulo: 'Instalación de sanitario',
          descripcion: 'Colocación profesional de inodoro con conexiones seguras y terminaciones prolijas.'
        },
        
        {
          imagen: '/image/trabajo-plomero-3.png',
          titulo: 'Instalación de cañerías',
          descripcion: 'Trabajo de conexión y montaje de tuberías para sistemas de agua domiciliarios.'
        }
      ],

      valoraciones: [
    {
      criterio: 'Puntualidad',
      porcentaje: 95
    },
    {
      criterio: 'Relación calidad/precio',
      porcentaje: 80
    },
    {
      criterio: 'Experiencia técnica',
      porcentaje: 70
    },
    {
      criterio: 'Comunicación',
      porcentaje: 98
    }
  ],

  resenas: [
    {
      nombre: 'Claudia Romero',
      comentario: 'Fernando instaló el termotanque solar en pocas horas, todo quedó prolijo y explicó muy bien el mantenimiento.',
      servicio: 'Termotanque solar'
    },
    {
      nombre: 'Ignacio Flores',
      comentario: 'Reparó una pérdida de agua que teníamos hace meses. Rápido, limpio y muy honesto con el presupuesto.',
      servicio: 'Reparación de cañerías'
    },
    {
      nombre: 'Miriam Ledesma',
      comentario: 'Instaló el sanitario nuevo sin ningún problema. Buen trato y puntual.',
      servicio: 'Instalación de sanitario'
    }
  ]

    },

    {
      id: 6,
      nombre: 'Nicolás Díaz',
      oficio: 'Técnico en climatización',
      ubicacion: 'Río Ceballos',
      experiencia: '7 años de experiencia',
      telefono: '351-6677889',
      jornada: 'Lunes a viernes de 08:00 a 18:00 hs.',
      pagos: 'Efectivo, transferencia bancaria y Mercado Pago.',
      descripcion: 'Especialista en instalación, reparación y mantenimiento de sistemas de climatización y refrigeración.',
      
      trabajos: [
        
        {
          imagen: '/image/trabajo-refrigeracion-1.png',
          titulo: 'Instalación de aire acondicionado',
          descripcion: 'Colocación profesional de equipos de aire acondicionado con conexiones seguras y optimización del rendimiento.'
        },
        
        {
          imagen: '/image/trabajo-refrigeracion-2.png',
          titulo: 'Mantenimiento de sistemas de refrigeración',
          descripcion: 'Revisión y mantenimiento preventivo para asegurar el buen funcionamiento de los sistemas de refrigeración.'
        },

        {
          imagen: '/image/trabajo-refrigeracion-3.png',
          titulo: 'Reparación de sistemas de calefacción',
          descripcion: 'Diagnóstico y reparación de fallas en sistemas de calefacción para garantizar un ambiente cálido y confortable.'
        }
      ],

      valoraciones: [
    {
      criterio: 'Puntualidad',
      porcentaje: 70
    },
    {
      criterio: 'Relación calidad/precio',
      porcentaje: 95
    },
    {
      criterio: 'Experiencia técnica',
      porcentaje: 80
    },
    {
      criterio: 'Comunicación',
      porcentaje: 70
    }
  ],
  
    resenas: [
    {
      nombre: 'Sofía Villalba',
      comentario: 'Instaló el aire acondicionado perfectamente y dejó todo limpio. Muy atento y puntual.',
      servicio: 'Aire acondicionado'
    },
    {
      nombre: 'Hernán Bustos',
      comentario: 'Hizo el mantenimiento del sistema de refrigeración del local. Muy eficiente y profesional.',
      servicio: 'Mantenimiento de refrigeración'
    },
    {
      nombre: 'Natalia Giménez',
      comentario: 'Reparó la calefacción justo antes del invierno. Rápido y con muy buen precio.',
      servicio: 'Reparación de calefacción'
    }
  ]

     }

  ];

  constructor(private route: ActivatedRoute) {                          // Inyectamos ActivatedRoute para acceder a los parámetros de la ruta
    const id = Number(this.route.snapshot.paramMap.get('id'));          // Obtenemos el ID del profesional desde la URL y lo convertimos a número

    this.profesional = this.profesionales.find(                         // Buscamos el profesional en el array utilizando el ID obtenido
      profesional => profesional.id === id                              // Comparamos el ID del profesional con el ID obtenido de la ruta
    );
  }

}

