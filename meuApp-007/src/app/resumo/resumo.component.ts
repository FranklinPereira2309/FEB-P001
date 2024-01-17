import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrl: './resumo.component.css'
})
export class ResumoComponent {
  @Input() resumo: any[]=[];
  @Input() veiculo:any;
  @Output() resumoSelecionado = new EventEmitter<any[]>();

  selecionarDescricao(descricao: any[]) {
    this.resumoSelecionado.emit(descricao);
    
    
  }

}
