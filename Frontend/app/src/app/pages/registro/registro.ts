import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formularioRegistro = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      telefono: ['' , Validators.required],
      fechaNacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      provincia: ['', Validators.required]
    });
  }

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
    } else {
      console.log('Formulario inválido');
      this.formularioRegistro.markAllAsTouched();
    }
  }
}