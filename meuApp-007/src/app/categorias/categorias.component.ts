import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  descricao: String = "";
  @Input() categoriasVeiculos:any;
  
  @Output() categoriaSelecionada = new EventEmitter<any[]>();
  

  selecionarCategorias(categoria: any[]) {
    this.categoriaSelecionada.emit(categoria);  
    
  }

 


}
