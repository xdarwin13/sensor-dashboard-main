import { Component, OnInit, OnDestroy } from '@angular/core';
import { SensorDataService } from '../../../services/sensor-data.service';
import { interval, Subscription } from 'rxjs';
import { Chart, registerables } from 'chart.js';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tempyhume',
  templateUrl: './tempyhume.component.html',
  styleUrl: './tempyhume.component.css',
})
export class TEMPYHUMEComponent {
  
}
