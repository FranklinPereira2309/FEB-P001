import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrl: './veiculo.component.css'
})
export class VeiculoComponent {
  @Input() veiculoData:any;
}
