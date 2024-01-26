import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UescComponent } from './components/uesc/uesc.component';
import { BuscarApiComponent } from './components/buscar-api/buscar-api.component';
import { TurismoComponent } from './components/turismo/turismo.component';

const routes: Routes = [
  {path:' ', component: BuscarApiComponent },
  {path:'uesc', component: UescComponent},
  {path:'apiwiki', component: BuscarApiComponent},
  {path:'turismo', component: TurismoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
