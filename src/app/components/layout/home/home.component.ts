import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corregido: styleUrls en lugar de styleUrl
})
export class HomeComponent {

  constructor(private router: Router) { }

  irAtemperatura(): void {
    console.log('ir a temperatura');
    this.router.navigate(['temperature']);
  }

  irAhumedad(): void {
    console.log('ir a humedad');
    this.router.navigate(['humidity']);
  }

  irTempyHume(): void {
    console.log('ir a tempyhume');
    this.router.navigate(['tempyhume']);
  }
}