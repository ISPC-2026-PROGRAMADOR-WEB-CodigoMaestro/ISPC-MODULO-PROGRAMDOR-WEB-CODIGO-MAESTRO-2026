import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-admin',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-admin.html',
  styleUrl: './nav-admin.css',
})
export class NavAdmin {}
