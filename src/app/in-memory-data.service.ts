import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(): object {
    const cars: Car[] = [
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
    return { cars };
  }

  genId(cars: Car[]): number {
    return cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 5;
  }

}
