import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { DescricaoComponent } from './descricao/descricao.component';
import { ResumoComponent } from './resumo/resumo.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    VeiculoComponent,
    DescricaoComponent,
    ResumoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
