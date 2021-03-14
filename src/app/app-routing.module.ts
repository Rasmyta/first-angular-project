import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { LoginComponent } from './views/login/login.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { RestaurantesComponent } from './views/restaurantes/restaurantes.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'nosotros', component: AcercaDeNosotrosComponent },
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
