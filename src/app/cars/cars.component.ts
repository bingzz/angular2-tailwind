import { Component } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  car: Car = {
    id: 1,
    brand: 'Honda',
    model: 'Civic',
    year: 2015
  };
}


