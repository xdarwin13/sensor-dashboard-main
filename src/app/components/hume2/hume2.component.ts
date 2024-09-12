import { Component, OnInit, OnDestroy } from '@angular/core';
import { SensorDataService } from '../../services/sensor-data.service';
import { interval, Subscription } from 'rxjs';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-hume2',
  templateUrl: './hume2.component.html',
  styleUrl: './hume2.component.css'
})
export class HUME2Component implements OnInit, OnDestroy {
  humidityData: number[] = [];
  chartLabels: string[] = [];
  private humiditySubscription!: Subscription;
  private chart!: Chart<'line', number[]>;
  private lastHumidity: number | null = null; // Guardar el último valor de humedad

  constructor(private sensorDataService: SensorDataService) {
    Chart.register(...registerables); // Registrar los componentes necesarios de Chart.js
  }

  ngOnInit(): void {
    this.initializeChart();
    this.startHumidityUpdates();
  }

 
  initializeChart(): void {
    this.chart = new Chart('humidityChart1', {
      type: 'line',
      data: {
        labels: this.chartLabels,
        datasets: [
          {
            data: this.humidityData,
            label: 'Humedad',
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

  startHumidityUpdates(): void {
    this.humiditySubscription = interval(1000) // Actualiza cada 1 segundos
      .subscribe(() => this.fetchHumidityData());
  }

  fetchHumidityData(): void {
    this.sensorDataService.getHumidity2().subscribe(data => {
      // Solo actualiza si el nuevo valor de humedad es diferente del último
      if (this.lastHumidity === null || data.humidity !== this.lastHumidity) {
        this.lastHumidity = data.humidity;
        this.humidityData.push(data.humidity);
        this.chartLabels.push(new Date().toLocaleTimeString());
        this.updateChartData();
        console.log("Humedad actualizada:", data.humidity);
      }
    });
  }

  updateChartData(): void {
    this.chart.data.labels = this.chartLabels;
    this.chart.data.datasets[0].data = this.humidityData;
    this.chart.update(); // Actualiza el gráfico con los nuevos datos
  }

  ngOnDestroy(): void {
    if (this.humiditySubscription) {
      this.humiditySubscription.unsubscribe();
    }
  }
}
