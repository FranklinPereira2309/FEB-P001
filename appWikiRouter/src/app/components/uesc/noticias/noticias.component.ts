import { Component } from '@angular/core';
import { NoticiaComponent } from '../noticia/noticia.component';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  noticias: any[] = [];

  constructor(private noticiaCompnent: NoticiaComponent) {}

  ngOnInit() {
    this.exibirNoticias();
  }

  async exibirNoticias(): Promise<void> {
    try {
      const data: any = await this.noticiaCompnent.pegarNoticias().toPromise();
      this.noticias = data.items;
            
    } catch (error) {
      console.log('Erro na chamada da API: ', error);
    }
  }
}
