import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  formularioRegistro: FormGroup;
  mensajeExito = false;

ubicaciones = [
  { id: 10, ciudad: 'Unquillo', provincia: 'Córdoba' },
  { id: 11, ciudad: 'Salsipuedes', provincia: 'Córdoba' },
  { id: 12, ciudad: 'Deán Funes', provincia: 'Córdoba' },
  { id: 13, ciudad: 'La Calera', provincia: 'Córdoba' }
];

oficios = [
  { id: 10, nombre_oficio: 'Gasista' },
  { id: 11, nombre_oficio: 'Albanil' },
  { id: 12, nombre_oficio: 'Jardinero' },
  { id: 13, nombre_oficio: 'Cerrajero' }
];

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.formularioRegistro = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      ubicacion: [null, Validators.required],
      oficio: [null]
    });
  }

  registrarUsuario() {

  if (this.formularioRegistro.valid) {
    const usuario = this.formularioRegistro.value;
    console.log("Enviando al servidor...");

    this.usuarioService.registrarUsuario(usuario).subscribe({
      next: (data) => {
        console.log(data);
        alert("El registro ha sido creado satisfactoriamente.");
        this.formularioRegistro.reset();
      },
      error: (error) => {
        console.error("Error al registrar usuario:", error);
        alert("Ocurrió un error al registrar el usuario.");
      }
    });
  } else {
    this.formularioRegistro.markAllAsTouched();
  }
}
}