import { Component, OnInit, OnDestroy } from '@angular/core';
import { SensorDataService } from '../../services/sensor-data.service';
import { interval, Subscription } from 'rxjs';
import { Chart, registerables } from 'chart.js';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tempyhume3',
  templateUrl: './tempyhume3.component.html',
  styleUrl: './tempyhume3.component.css',
  providers: [MessageService]
})
export class TEMPYHUME3Component implements OnInit, OnDestroy {
  temperatureData: number[] = [];
  humidityData: number[] = [];
  chartLabels: string[] = [];
  private dataSubscription!: Subscription;
  private chart!: Chart<'line', number[]>;
  private lastTemperature: number | null = null;
  private lastHumidity: number | null = null;

  constructor(
    private sensorDataService: SensorDataService,
    private messageService: MessageService
  ) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.initializeChart();
    this.startDataUpdates();
  }

  initializeChart(): void {
    this.chart = new Chart('combinedChart2', {
      type: 'line',
      data: {
        labels: this.chartLabels,
        datasets: [
          {
            data: this.temperatureData,
            label: 'Temperatura',
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
            tension: 0.1
          },
          {
            data: this.humidityData,
            label: 'Humedad',
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(200, 200, 200, 0.5)'
            },
            ticks: {
              color: 'white',
              padding: 10
            }
          },
          x: {
            grid: {
              color: 'red'
            },
            ticks: {
              color: 'white',
              padding: 10
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white'
            }
          }
        }
      }
    });
  }

  startDataUpdates(): void {
    this.dataSubscription = interval(5000).subscribe(() => {
      this.fetchTemperatureData();
      this.fetchHumidityData();
    });
  }

  fetchTemperatureData(): void {
    this.sensorDataService.getTemperature3().subscribe(data => {
       //if (this.lastTemperature === null || data.temperature !== this.lastTemperature) {
        this.lastTemperature = data.temperature;
        this.temperatureData.push(data.temperature);
        this.chartLabels.push(new Date().toLocaleTimeString());
        this.updateChartData();
        console.log("Temperatura actualizada:", data.temperature);
        
        if (data.temperature >= 40) {
          this.sendRiskNotification();
        }
      // }
    });
  }

  fetchHumidityData(): void {
    this.sensorDataService.getHumidity3().subscribe(data => {
       //if (this.lastHumidity === null || data.humidity !== this.lastHumidity) {
        this.lastHumidity = data.humidity;
        this.humidityData.push(data.humidity);
        this.updateChartData();
        console.log("Humedad actualizada:", data.humidity);
      // }
    });
  }

  updateChartData(): void {
    this.chart.data.labels = this.chartLabels;
    this.chart.data.datasets[0].data = this.temperatureData;
    this.chart.data.datasets[1].data = this.humidityData;
    this.chart.update();
  }

  sendRiskNotification(): void {
    this.messageService.add({
      key: 'customToast',
      summary: '⚠️ Advertencia de Temperatura',
      detail: '¡La temperatura ha alcanzado los 40 grados o más!',
      life: 2000,
      styleClass: 'custom-toast'
    });
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}

