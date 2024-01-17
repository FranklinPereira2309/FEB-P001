import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrl: './descricao.component.css'
})
export class DescricaoComponent {
  @Input() veiculo:any;
  
  @Output() descricaoSelecionada = new EventEmitter<any[]>();
  

  pegarDescricao(descricao: any) {
    this.descricaoSelecionada.emit(descricao);
        
  }

  

 
}
