import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit {

  usuarioLogueado: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {

    const usuario = localStorage.getItem('usuario');

    if (usuario) {
      this.usuarioLogueado = JSON.parse(usuario);
    }

  }

  logout() {

    localStorage.removeItem('usuario');
    this.usuarioLogueado = null;
    
    this.router.navigate(['/']).then(() => {
    window.location.reload();
  });

  }

}