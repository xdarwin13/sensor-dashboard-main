import { Component, OnInit, OnDestroy } from '@angular/core';
import { SensorDataService } from '../../../services/sensor-data.service';
import { interval, Subscription } from 'rxjs';
import { Chart, registerables } from 'chart.js';
import { MessageService } from 'primeng/api'; // Importar el servicio de mensajes

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css',
  providers: [MessageService] // Agregar MessageService como proveedor
})
export class TemperatureComponent {
  
}
