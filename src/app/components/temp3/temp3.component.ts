import { Component, OnInit, OnDestroy } from '@angular/core';
import { SensorDataService } from '../../services/sensor-data.service';
import { interval, Subscription } from 'rxjs';
import { Chart, registerables } from 'chart.js';
import { MessageService } from 'primeng/api'; // Importar el servicio de mensajes

@Component({
  selector: 'app-temp3',
  templateUrl: './temp3.component.html',
  styleUrl: './temp3.component.css',
  providers: [MessageService] // Agregar MessageService como proveedor
})
export class TEMP3Component implements OnInit, OnDestroy {
  temperatureData: number[] = [];
  chartLabels: string[] = [];
  private temperatureSubscription!: Subscription;
  private chart!: Chart<'line', number[]>;
  private lastTemperature: number | null = null;

  constructor(
    private sensorDataService: SensorDataService,
    private messageService: MessageService // Inyectar MessageService
  ) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.initializeChart();
    this.startTemperatureUpdates();
  }

  initializeChart(): void {
    this.chart = new Chart('temperatureChart3', {
      type: 'line',
      data: {
        labels: this.chartLabels,
        datasets: [
          {
            data: this.temperatureData,
            label: 'Temperatura',
            fill: true, // Activar el relleno debajo de la línea
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color del fondo (relleno debajo de la línea)
            borderColor: 'rgba(255, 99, 132, 1)', // Color de la línea
            pointBackgroundColor: 'rgba(54, 162, 235, 1)', // Color de los puntos
            pointBorderColor: '#fff', // Color del borde de los puntos
            pointHoverBackgroundColor: '#fff', // Color del punto al pasar el ratón
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)', // Color del borde del punto al pasar el ratón
            tension: 0.1 // Suavidad de la línea
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(200, 200, 200, 0.5)' // Color de las líneas del eje Y
            },
            ticks: {
              color: 'white', // Color de los números del eje Y
              padding: 10 // Espaciado entre los números y las líneas del eje Y
            }
          },
          x: {
            grid: {
              color: 'red' // Color de las líneas del eje Y
            },
            ticks: {
              color: 'white', // Color de los números del eje X
              padding: 10 // Espaciado entre los números y las líneas del eje X
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white' // Color del texto de la leyenda
            }
          }
        }
      }
    });
  }

  startTemperatureUpdates(): void {
    this.temperatureSubscription = interval(1000)
      .subscribe(() => this.fetchTemperatureData());
  }

  fetchTemperatureData(): void {
    this.sensorDataService.getTemperature3().subscribe(data => {
      if (this.lastTemperature === null || data.temperature !== this.lastTemperature) {
        this.lastTemperature = data.temperature;
        this.temperatureData.push(data.temperature);
        this.chartLabels.push(new Date().toLocaleTimeString());
        this.updateChartData();
        console.log("Temperatura actualizada:", data.temperature);

        // Verificar si la temperatura alcanza los 50 grados para enviar una notificación de riesgo
        
      }
      if (data.temperature >= 40) {
        this.sendRiskNotification();
      }
    });
  }

  sendRiskNotification(): void {
    this.messageService.add({
      key: 'customToast', // Clave para usar la plantilla personalizada
      summary: '⚠️ Advertencia de Temperatura',
      detail: '¡La temperatura ha alcanzado los 40 grados o más!',
      life: 2000, // Duración de la notificación en milisegundos
      styleClass: 'custom-toast', // Clase de estilo personalizada
    });
  }

  updateChartData(): void {
    this.chart.data.labels = this.chartLabels;
    this.chart.data.datasets[0].data = this.temperatureData;
    this.chart.update();
  }

  ngOnDestroy(): void {
    if (this.temperatureSubscription) {
      this.temperatureSubscription.unsubscribe();
    }
  }

}

