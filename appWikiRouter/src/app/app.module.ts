import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarApiComponent } from './components/buscar-api/buscar-api.component';
import { UescComponent } from './components/uesc/uesc.component';
import { DestaqueComponent } from './components/uesc/destaque/destaque.component';
import { FooterComponent } from './components/uesc/footer/footer.component';
import { MenuComponent } from './components/uesc/menu/menu.component';
import { NavBarComponent } from './components/uesc/nav-bar/nav-bar.component';
import { NoticiasComponent } from './components/uesc/noticias/noticias.component';
import { ResultadosComponent } from './components/uesc/resultados/resultados.component';
import { ServicosComponent } from './components/uesc/servicos/servicos.component';
import { TempoComponent } from './components/uesc/tempo/tempo.component';
import { NoticiaComponent } from './components/uesc/noticia/noticia.component';
import { TurismoComponent } from './components/turismo/turismo.component';
import { CardComponent } from './components/turismo/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarApiComponent,
    UescComponent,
    DestaqueComponent,
    FooterComponent,
    MenuComponent,
    NavBarComponent,
    NoticiasComponent,
    ResultadosComponent,
    ServicosComponent,
    TempoComponent,
    NoticiaComponent,
    TurismoComponent,
    CardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NoticiasComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
