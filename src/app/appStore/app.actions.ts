
export class GetPopularMovies {
  static readonly type = '[GetPopularMovies] Getting popular movies';
}

export class GetMovieDetails {
  static readonly type = '[GetMovieDetails] Getting movie details';
  constructor(public payload: number) { }
}
