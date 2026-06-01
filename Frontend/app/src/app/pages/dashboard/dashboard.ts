
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {

    this.usuarioService.getUsuarios().subscribe({

      next: (data) => {
        this.usuarios = data;
        console.log(data);
      },

      error: (error) => {
        console.error('Error al obtener usuarios:', error);
      }

    });

  }

}