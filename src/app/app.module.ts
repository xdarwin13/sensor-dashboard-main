import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts'; // Importa NgChartsModule aquí
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureComponent } from './components/layout/temperature/temperature.component';
import { HumidityComponent } from './components/layout/humidity/humidity.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './components/layout/home/home.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Cuadro1Component } from './components/cuadro1/cuadro1.component';
import { Cuadro2Component } from './components/cuadro2/cuadro2.component';
import { Cuadro3Component } from './components/cuadro3/cuadro3.component';
import { Cuadro4Component } from './components/cuadro4/cuadro4.component';



@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    HumidityComponent,
    HomeComponent,
    Cuadro1Component,
    Cuadro2Component,
    Cuadro3Component,
    Cuadro4Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule ,// Asegúrate de agregar NgChartsModule aquí
    ToastModule,
  BrowserAnimationsModule
  ],
  providers: [
    provideAnimationsAsync(),
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
