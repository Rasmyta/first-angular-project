import { Component, Input, OnInit } from '@angular/core';
import { Plato } from 'src/app/shared/interfaces/plato';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  @Input()
  public plato: Plato;

  constructor() {
    this.plato = {
      id: 1,
      category_id: 1,
      restaurant_id: 1,
      name: '',
      price: 1,
      description: '',
      photo_path: ''
    }
  }

  ngOnInit(): void {
  }

}
