import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemperatureComponent } from './components/layout/temperature/temperature.component';
import { HumidityComponent } from './components/layout/humidity/humidity.component';
import { HomeComponent } from './components/layout/home/home.component';
import { TEMP1Component } from './components/temp1/temp1.component';
import { TEMP2Component } from './components/temp2/temp2.component';
import { TEMP3Component } from './components/temp3/temp3.component';
import { TEMP4Component } from './components/temp4/temp4.component';
import { HUME1Component } from './components/hume1/hume1.component';
import { HUME2Component } from './components/hume2/hume2.component';
import { HUME3Component } from './components/hume3/hume3.component';
import { HUME4Component } from './components/hume4/hume4.component';
import { TEMPYHUMEComponent } from './components/layout/tempyhume/tempyhume.component';
import { TEMPYHUME1Component } from './components/tempyhume1/tempyhume1.component';
import { TEMPYHUME2Component } from './components/tempyhume2/tempyhume2.component';
import { TEMPYHUME3Component } from './components/tempyhume3/tempyhume3.component';
import { TEMPYHUME4Component } from './components/tempyhume4/tempyhume4.component';



const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: 'temperature', component: TemperatureComponent },
  { path: 'humidity', component: HumidityComponent },
  { path: 'tempyhume', component: TEMPYHUMEComponent },
  { path: '', redirectTo: '/temperature', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
