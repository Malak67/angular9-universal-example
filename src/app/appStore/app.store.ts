import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { AppStateModel } from './app-state.model';
import { Injectable } from '@angular/core';
import { PublicService } from '../public/services/public.service';
import { GetPopularMovies, GetMovieDetails } from './app.actions';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@State<AppStateModel>({
  name: 'app',
  defaults: {
    movies: [],
    selectedMovie: null,
  }
})

@Injectable()
export class AppState {

  @Selector()
  static movies(state: AppStateModel): any[] | null {
    return state.movies;
  }

  @Selector()
  static selectedMovie(state: AppStateModel): any | null {
    return state.selectedMovie;
  }

  constructor(
    private store: Store,
    readonly service: PublicService
  ) { }

  @Action(GetPopularMovies)
  getPopularMovies(ctx: StateContext<AppStateModel>, action: GetPopularMovies) {
    return this.service.getList().pipe(
      map((res: any) => {
        if (res && res.results && res.results.length > 0) {
          ctx.patchState({
            movies: res.results
          });
          return;
        }
      }),
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        return of(null);
      })
    );
  }

  @Action(GetMovieDetails)
  getMovieDetails(ctx: StateContext<AppStateModel>, action: GetMovieDetails) {
    if (!action.payload) {
      return;
    }
    ctx.patchState({
      selectedMovie: null
    });
    return this.service.getDetails(action.payload).pipe(
      map((res: any) => {
        if (res) {
          ctx.patchState({
            selectedMovie: res
          });
          return;
        }
      }),
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        ctx.patchState({
          selectedMovie: null
        });
        return of(null);
      })
    );
  }

}
