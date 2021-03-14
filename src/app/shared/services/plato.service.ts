import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plato } from '../interfaces/plato';

@Injectable({
  providedIn: 'root'
})

export class PlatoService {

  constructor(private httpClient: HttpClient) { }

  public recuperarPlatos(): Observable<Plato[]> {

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: 'Bearer ' + 'Vx4ifW2qttC5WsGK5fOx6JLA4rq09FVTL9weC7NO'
    });

    return this.httpClient.get<Plato[]>('https://foodgate.herokuapp.com/asocrest/dishes', { headers });
  }
}
