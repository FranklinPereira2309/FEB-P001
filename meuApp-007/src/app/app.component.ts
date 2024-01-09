import { Component, OnInit } from '@angular/core';
import { JsonLoaderService } from '../json.loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <div *ngFor="let veiculo of veiculos">
      <app-veiculos [veiculoData]="veiculo"></app-veiculo>
    </div> `,
})
export class AppComponent implements OnInit{
  title = 'meuApp-007';
  veiculos: any[] = [];

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    this.jsonLoaderService.getJsonData().subscribe((data) => {
      this.veiculos = data;
    })
  }
}
