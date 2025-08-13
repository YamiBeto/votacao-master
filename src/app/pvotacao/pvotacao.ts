import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { PersongemComponent } from '../persongem/persongem';

@Component({
  selector: 'app-pvotacao',
  standalone: true,
  imports: [CommonModule, PersongemComponent, NgClass],
  templateUrl: './pvotacao.html',
  styleUrls: ['./pvotacao.css']
})
export class PvotacaoComponent {
  personagens = [
    {
      id: 1,
      nome: 'Batman',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Batman_in_Justice_League_TV_series.png',
      votos: 0
    },
    {
      id: 2,
      nome: 'Superman',
      imagem: 'https://i.pinimg.com/736x/2a/e2/72/2ae27219e97e6100ec4ea6d1ee08cb0e.jpg',
      votos: 0
    },
    {
      id: 3,
      nome: 'Flash',
      imagem: 'https://i.pinimg.com/474x/8d/26/41/8d2641882b9fbbc44da3db2374af0cf6.jpg',
      votos: 0
    },
    {
      id: 4,
      nome: 'Lanterna Verde',
      imagem: 'https://i.pinimg.com/736x/8e/14/f7/8e14f7f80221cefe4d598434fb9936ee.jpg',
      votos: 0
    },
    {
      id: 5,
      nome: 'Questão',
      imagem: 'https://i.pinimg.com/originals/68/3a/1c/683a1c3db152e29f0afba631caf3a380.png',
      votos: 0
    }
  ];

  onVotar(characterId: number) {
    const character = this.personagens.find(p => p.id === characterId);
    if (character) {
      character.votos++;
    }
  }
}
