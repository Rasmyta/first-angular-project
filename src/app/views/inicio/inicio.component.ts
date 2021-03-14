import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/shared/interfaces/plato';
import { PlatoService } from 'src/app/shared/services/plato.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public platos: Plato[];

  constructor(private platoService: PlatoService) {
    this.platos = [];
  }

  ngOnInit(): void {
    this.listarPlatos();
  }

  private listarPlatos(): void {
    this.platoService.recuperarPlatos().subscribe(
      (data: any) => {
        this.platos = data['data'];
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
