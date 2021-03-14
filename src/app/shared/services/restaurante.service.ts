import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor(private httpClient: HttpClient) { }

  public recuperarRestaurantes(): Observable<any[]> {

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: 'Bearer ' + 'Vx4ifW2qttC5WsGK5fOx6JLA4rq09FVTL9weC7NO'
    });

    return this.httpClient.get<any[]>('https://foodgate.herokuapp.com/asocrest/restaurants', { headers });
  }
}
