import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemperatureComponent } from './temperature/temperature.component';
import { HumidityComponent } from './humidity/humidity.component';
import { HomeComponent } from './home/home.component';

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
