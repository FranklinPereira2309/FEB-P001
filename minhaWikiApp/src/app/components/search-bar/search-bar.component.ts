import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  valorDoInput: String = '';
  resposta : any;
  arrResposta : any[] = [];
  constructor (private apiServiceService : ApiServiceService) {}  
  

  consultarAPI() {
    this.apiServiceService.consutaltarDados(this.valorDoInput).subscribe(
      (dados) => {
        this.resposta = dados;  
        this.arrResposta.push(...this.resposta.query.pages);       
              
      },
      (erro) => {
        console.error('Erro ao consultar a API:', erro);
      }
    );
  } 
  

  buscarValor() {
    
    this.consultarAPI();
  }

  
}
