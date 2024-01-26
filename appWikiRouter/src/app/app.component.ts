import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appWikiRouter';
  classBorderBottom: boolean = false;

  constructor(private rotas: Router, private rotaAtiva: ActivatedRoute) {}

  paraWiki() {
    this.rotas.navigate(['apiwiki']);
    this.classBorderBottom = true;
  }
  paraUesc() {
    this.rotas.navigate(['uesc']);
    this.classBorderBottom = true;
  }

  paraTurismo() {
    this.rotas.navigate(['turismo']);
    this.classBorderBottom = true;
  }
}

