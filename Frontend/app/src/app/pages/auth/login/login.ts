import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {

  loginForm;

  constructor(private fb: FormBuilder, private router: Router, private usuarioService: UsuarioService) {

    this.loginForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  }

  ingresar() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

  const datosLogin = {
      
    email: this.loginForm.value.email,
    contrasena: this.loginForm.value.password
  };

  this.usuarioService.loginUsuario(datosLogin).subscribe( data => {

    if (data.id > 0)
    {
    localStorage.setItem('usuario', JSON.stringify(data));
    alert('Login exitoso');
    this.router.navigate(['/home']).then(() => {
     window.location.reload();
    });
    }

    else {this.loginForm.markAllAsDirty();
    alert('Login fallido, revise sus credenciales');
    }
  })

  }

}