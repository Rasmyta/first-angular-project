import { Component, Input, OnInit } from '@angular/core';
import { RestauranteService } from 'src/app/shared/services/restaurante.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  @Input()
  public restaurantes: any[];

  constructor(private restauranteService: RestauranteService) {
    this.restaurantes = [];
  }

  ngOnInit(): void {
    this.listarRestaurantes();
  }

  private listarRestaurantes(): void {
    this.restauranteService.recuperarRestaurantes().subscribe(
      (data: any) => {
        this.restaurantes = data['data'];
      },
      (error: Error) => {
        console.log('Error: ', error);
      },
      () => {
        console.log('Petición realizada correctamente');
      }
    );
  }

}
