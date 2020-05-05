import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter$: Observable<number>;
  tick = 1000;
  constructor() { }

  ngOnInit(): void {
    this.counter$ = this.getCountDown(1);
  }

  getCountDown(value: number): Observable<number> {
    return interval(1000)
      .pipe(
        startWith(0),
        map(x => x + 1)
      );
  }

}
