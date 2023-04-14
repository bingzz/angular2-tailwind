import { Injectable } from '@angular/core';
import { Car } from './car';
import { CARS } from './mock-cars';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CarService {
  private carsUrl: string = 'api/cars';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }



  private log(message: string) {
    this.messageService.add(`CarService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  // Create asynchronous request to the server
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl)
      .pipe(
        tap(_ => this.log('Fetched Cars')),
        catchError(this.handleError<Car[]>('getCars', []))
      );
    // const cars = of(CARS);
    // this.messageService.add('CarService: fetched cars');
    // return cars;
  }

  getCar(id: number): Observable<Car> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url).pipe(
      tap(_ => this.log(`Fetched Car ID: ${id}`)),
      catchError(this.handleError<Car>(`GetCar ID: ${id}`))
    );

    // const car = CARS.find(h => h.id === id)!;
    // this.messageService.add(`MessageService: Fetched Car ID: ${id}`);
    // return of(car);
  }

  updateCar(car: Car): Observable<any> {
    return this.http.put(this.carsUrl, car, this.httpOptions).pipe(
      tap(_ => this.log(`Updated Car ID: ${car.id}`)),
      catchError(this.handleError<any>(`Update Car`))
    );
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.carsUrl, car, this.httpOptions).pipe(
      tap((newCar: Car) => this.log(`Added Car w/ ID: ${newCar.id}`)),
      catchError(this.handleError<Car>(`AddCar`))
    );
  }

  deleteCar(id: number): Observable<Car> {
    const url = `${this.carsUrl}/${id}`;

    return this.http.delete<Car>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Deleted Car ID: ${id}`)),
      catchError(this.handleError<Car>(`DeleteCar`))
    );
  }

}
