import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrl: './descricao.component.css'
})
export class DescricaoComponent {
  @Input() veiculo:any;
  @Output() descricaoSelecionada = new EventEmitter<any[]>();

  selecionarDescricao(descricao: any[]) {
    console.log(descricao);
    this.descricaoSelecionada.emit(descricao);
  }

 
}
