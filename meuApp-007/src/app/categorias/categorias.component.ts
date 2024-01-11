import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  @Input() categoriasVeiculos:any;
  @Output() categoriaSelecionada = new EventEmitter<any[]>();

  selecionarCategorias(catergoria: any[]) {
    console.log(catergoria);
    this.categoriaSelecionada.emit(catergoria);
  }




}
