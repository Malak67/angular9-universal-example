import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PublicService {
  apiKey = '6cb88ed5bdef49fcfa7206e4930c1cbf';
  url = 'https://api.themoviedb.org/3/'
  constructor(private http: HttpClient) {}

  getList() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`, { headers});
  }

  getDetails(id: number) {
    if (!id) {
      return;
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`, { headers});
  }

}
