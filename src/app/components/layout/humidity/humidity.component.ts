import { Component, OnInit, OnDestroy } from '@angular/core';
import { SensorDataService } from '../../../services/sensor-data.service';
import { interval, Subscription } from 'rxjs';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrl: './humidity.component.css'
})
export class HumidityComponent  {
 
}
