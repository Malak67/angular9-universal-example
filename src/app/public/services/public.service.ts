import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class PublicService {
  apiKey = environment.apiKey;
  url = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {}

  getList() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`${this.url}/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`, { headers});
  }

  getDetails(id: number) {
    if (!id) {
      return;
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`${this.url}/movie/${id}?api_key=${this.apiKey}&language=en-US`, { headers});
  }

}
