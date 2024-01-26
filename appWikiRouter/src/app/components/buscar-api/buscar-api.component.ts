import { Component } from '@angular/core';
import { ApiWikiService } from '../../service/api-wiki.service';


@Component({
  selector: 'app-buscar-api',
  templateUrl: './buscar-api.component.html',
  styleUrl: './buscar-api.component.css'
})
export class BuscarApiComponent {
  valorDoInput: any;
  resposta : any;
  arrResposta : any[] = [];
 
  constructor (private api : ApiWikiService) {}  
  

  consultarAPI() {
    this.api.consutaltarDados(this.valorDoInput).subscribe(
      (dados) => {
        this.resposta = dados;  
        this.arrResposta.push(...this.resposta.query.search);                      
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
