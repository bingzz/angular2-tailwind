import { Component, OnInit } from '@angular/core';
import { Car, Driver } from '../car';
import { CarService } from '../car.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

// variables
export class CarsComponent implements OnInit {
  // Create constructor
  constructor(
    private carService: CarService,
    private messageService: MessageService
  ) { }

  // initializing variables to be used in html
  // input: string = '';
  selectedCar?: Car;
  newCar = {
    brand: '',
    model: '',
    year: ''
  };

  cars: Car[] = [];
  // cars = CARS;

  // car: Car = {
  //   id: 1,
  //   brand: 'Honda',
  //   model: 'Civic',
  //   year: 2015
  // };

  // driver: Driver = {
  //   id: 1,
  //   firstName: 'irving',
  //   lastName: 'real',
  //   age: 27,
  // };

  // Initialize functions?
  ngOnInit(): void {
    this.getCars();
  }

  // functions
  onSelect(car: Car): void {
    this.selectedCar = car;
    this.messageService.add(`CarsComponent: selected car id=${car.id}`);
  }

  // Function in this component
  // READ CARS
  getCars(): void {
    // this.cars = this.carService.getCars(); // synchronous call

    // asynchronous call
    this.carService.getCars()
      .subscribe(cars => this.cars = cars);
  }

  // CREATE NEW CAR
  add(newCar: any): void {
    const notEmpty = Object.values(newCar).every(val => val !== '')
    if (!notEmpty) return;

    this.carService.addCar({...newCar} as Car)
      .subscribe(car => {
        this.cars.push(car);
      });
  }

  // DELETE CAR
  delete(car: Car): void {
    this.cars = this.cars.filter(c => c !== car);
    this.carService.deleteCar(car.id).subscribe();
  }
}


