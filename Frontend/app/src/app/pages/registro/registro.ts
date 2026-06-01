import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
<<<<<<< HEAD
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
=======
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
>>>>>>> 20a701adcecef99a89b25046f9443ae324a35c95

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

<<<<<<< HEAD
  constructor(private formBuilder: FormBuilder, private router: Router) {
=======
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

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
>>>>>>> 20a701adcecef99a89b25046f9443ae324a35c95
    this.formularioRegistro = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      ubicacion: [null, Validators.required],
      oficio: [null]
    });
  }

<<<<<<< HEAD
  provincias: string[] = [
    'Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba',
    'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa',
    'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro',
    'Salta', 'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe',
    'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'
  ];

  onSubmit() {
    console.log('Formulario enviado', this.formularioRegistro.valid);
    Object.keys(this.formularioRegistro.controls).forEach((controlName) => {
      const control = this.formularioRegistro.get(controlName);
      console.log(
        controlName,
        'valid=',
        control?.valid,
        'value=',
        control?.value
      );
    });

    if (this.formularioRegistro.valid) {
      console.log('Registro válido', this.formularioRegistro.value);
      this.mensajeExito = true;
      this.router.navigate(['/login']).then(() => {
        this.formularioRegistro.reset();
      });
=======
  registrarUsuario() {

    if (this.formularioRegistro.valid) {

      const usuario = {
        ...this.formularioRegistro.value,
        rol: 10
      };

      console.log("Enviando al servidor...");
      console.log(usuario);

      this.usuarioService.registrarUsuario(usuario).subscribe({
        next: (data) => {
          console.log(data);
          alert("El registro ha sido creado satisfactoriamente.");
          this.formularioRegistro.reset();

          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error("Error al registrar usuario:", error);
          alert("Ocurrió un error al registrar el usuario.");
        }
      });

>>>>>>> 20a701adcecef99a89b25046f9443ae324a35c95
    } else {
      console.log('Formulario inválido');
      this.formularioRegistro.markAllAsTouched();
    }

  }
}