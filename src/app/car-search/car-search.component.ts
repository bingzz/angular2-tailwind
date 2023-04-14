import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Car } from '../car';
import { CarService } from '../car.service';
@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {
  cars$!: Observable<Car[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private carService: CarService
  ) { }

  // Push the search into Observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.cars$ = this.searchTerms.pipe(
      debounceTime(300), // wait 300ms after keystroke before search
      distinctUntilChanged(), // ignore new search if same as previous form
      switchMap((term: string) => this.carService.searchCars(term)), // switch to new search each time the term changes
    )
  }
}
