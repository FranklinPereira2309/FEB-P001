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
  resumoSelecionado: any;
  descricaoSelecionada: any;
  resumoEscolhido: any[] = [];
  selecionarResumoEscolhido:any;

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    this.jsonLoaderService.getJsonData().subscribe((data) => {
      this.veiculos = data;
      console.log(data);
      
      this.onSelectCategoria(this.veiculos.Avioes)
    })    
     
  }

  onSelectCategoria(categoria: any){
    this.selectedCategoriaVeiculos = categoria;
  }

  onSelectVeiculos(veiculo: any) {
    this.veiculoSelecionado = veiculo;
  }

  onSelectVeiculoDescription(veiculo: any) {
    this.veiculoSelecionado = veiculo;
  }

  onResumoSelecionado(categoria: any){
    this.resumoEscolhido = categoria;       
    
  }

  onDescricaoSelecionada(_resumo: any){
    this.resumoEscolhido.push(_resumo);
  }

  
}
