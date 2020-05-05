import { Component, OnInit } from '@angular/core';
import { PublicService } from '../services/public.service';
import { AppState } from '../../appStore/app.store';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetPopularMovies } from '../../appStore/app.actions';

export interface Article {
  id: number;
  title: string;
  userId: number;
  body: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Select(AppState.movies) movies$: Observable<any[]>;
  listItems: any[];
  constructor(
    readonly store: Store
    ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetPopularMovies());
  }

}
