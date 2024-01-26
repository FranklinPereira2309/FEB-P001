import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appWikiRouter';

  constructor(private rotas: Router, private rotaAtiva: ActivatedRoute) {}

  paraWiki() {
    this.rotas.navigate(['apiwiki']);
  }
  paraUesc() {
    this.rotas.navigate(['uesc']);
  }
}
