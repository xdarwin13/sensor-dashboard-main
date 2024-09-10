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
import { TEMP1Component } from './components/temp1/temp1.component';
import { TEMP2Component } from './components/temp2/temp2.component';
import { TEMP3Component } from './components/temp3/temp3.component';
import { HUME1Component } from './components/hume1/hume1.component';
import { HUME2Component } from './components/hume2/hume2.component';
import { HUME3Component } from './components/hume3/hume3.component';
import { HUME4Component } from './components/hume4/hume4.component';
import { TEMP4Component } from './components/temp4/temp4.component';
import { TEMPYHUMEComponent } from './components/layout/tempyhume/tempyhume.component';
import { TEMPYHUME1Component } from './components/tempyhume1/tempyhume1.component';
import { TEMPYHUME2Component } from './components/tempyhume2/tempyhume2.component';
import { TEMPYHUME3Component } from './components/tempyhume3/tempyhume3.component';
import { TEMPYHUME4Component } from './components/tempyhume4/tempyhume4.component';





@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    HumidityComponent,
    HomeComponent,
    TEMP1Component,
    TEMP2Component,
    TEMP3Component,
    HUME1Component,
    HUME2Component,
    HUME3Component,
    HUME4Component,
    TEMP4Component,
    TEMPYHUMEComponent,
    TEMPYHUME1Component,
    TEMPYHUME2Component,
    TEMPYHUME3Component,
    TEMPYHUME4Component,


    
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
