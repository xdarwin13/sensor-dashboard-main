import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemperatureComponent } from './components/layout/temperature/temperature.component';
import { HumidityComponent } from './components/layout/humidity/humidity.component';
import { HomeComponent } from './components/layout/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: 'temperature', component: TemperatureComponent },
  { path: 'humidity', component: HumidityComponent },
  { path: '', redirectTo: '/temperature', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
