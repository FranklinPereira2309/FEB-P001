import { Component, OnInit } from '@angular/core';
import { JsonLoaderService } from '../json.loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent implements OnInit{
  title = 'meuApp-007';
  veiculos: any;
  selectedCategoriaVeiculos: any [] = [];
  descriptionCategorySelect: any [] = [];
  veiculoSelecionado: any;

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    this.jsonLoaderService.getJsonData().subscribe((data) => {
      this.veiculos = data;
      this.selectCategoria(this.veiculos.Avioes)
    })
    
     
  }

  selectCategoria(categoria: any){
    this.selectedCategoriaVeiculos = categoria;
  }

  selectVeiculos(veiculo: any) {
    this.veiculoSelecionado = veiculo;
  }

  onSelectVeiculos(string: String) {
    
  }
}
