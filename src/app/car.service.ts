import { Injectable } from '@angular/core';
import { Car } from './car';
import { CARS } from './mock-cars';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class CarService {
  constructor(private messageService: MessageService) { }

  // Create asynchronous request to the server
  getCars(): Observable<Car[]> {
    const cars = of(CARS);
    this.messageService.add('CarService: fetched cars');
    return cars;
  }

}
