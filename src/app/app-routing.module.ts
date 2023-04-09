import { NgModule } from '@angular/core';
import { CarsComponent } from './cars/cars.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

// Routes list
const routes: Routes = [
  {
    path: 'cars', // path
    component: CarsComponent, // js for that path
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'details/:id',
    component: CarDetailComponent,
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
