import { Component } from '@angular/core';
import { Car, Driver } from '../car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

// scope variables
export class CarsComponent {
  // initializing variables
  input: string = '';
  selectedCar?: Car;

  car: Car = {
    id: 1,
    brand: 'Honda',
    model: 'Civic',
    year: 2015
  };

  driver: Driver = {
    id: 1,
    firstName: 'irving',
    lastName: 'real',
    age: 27,
  };

  cars = CARS;

  // functions
  onSelect(car: Car): void {
    this.selectedCar = car;
  }
}

export const CARS: Car[] = [
  {
    id: 1,
    brand: 'Honda',
    model: 'CRV',
    year: 2013,
  },
  {
    id: 2,
    brand: 'Toyota',
    model: 'Corolla',
    year: 2018,
  },
  {
    id: 3,
    brand: 'Mitsubishi',
    model: 'Lancer',
    year: 2009,
  },
  {
    id: 4,
    brand: 'Subaru',
    model: 'Impreza',
    year: 2021,
  },
  {
    id: 5,
    brand: 'BMW',
    model: '325i',
    year: 2019,
  },
];
