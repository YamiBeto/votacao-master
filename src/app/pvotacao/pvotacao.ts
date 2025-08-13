import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersongemComponent } from '../persongem/persongem';

@Component({
  selector: 'app-pvotacao',
  standalone: true,
  imports: [CommonModule, PersongemComponent],
  templateUrl: './pvotacao.html',
  styleUrls: ['./pvotacao.css']
})
export class Pvotacao {
  nome: string = 'Personagem';
  imagem: string = 'https://upload.wikimedia.org/wikipedia/commons/6/60/Batman_in_Justice_League_TV_series.png';
  votos: number = 0;

  nomeV: string = 'Personagem';
  imagemV: string = 'https://upload.wikimedia.org/wikipedia/commons/6/60/Batman_in_Justice_League_TV_series.png';
  votosV: number = 0;


  onVotar() {
    this.votos++;
  }
}
