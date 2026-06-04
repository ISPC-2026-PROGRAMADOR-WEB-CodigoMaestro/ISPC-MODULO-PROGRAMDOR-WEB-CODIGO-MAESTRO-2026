import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-estandar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-estandar.html',
  styleUrl: './nav-estandar.css',
})
export class NavEstandar {}
