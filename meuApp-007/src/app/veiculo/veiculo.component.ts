import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrl: './veiculo.component.css'
})
export class VeiculoComponent {
  nomeDaCategoria: String = " ";
  @Input() arrVeiculo: any [] = [];
  
  @Output() veiculoSelecionado = new EventEmitter<any>();
  
  
  ngOnInit() {
        
  }
  
  selecionarVeiculo(veiculo: any) {
    this.veiculoSelecionado.emit(veiculo);
    
  }

 
  // @Output() selectedVeiculo = new EventEmitter<String>();

  // emitEvent() {
  //   this.selectedVeiculo.emit("teste");
  // }
}
