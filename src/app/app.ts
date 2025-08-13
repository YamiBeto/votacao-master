import { Component } from '@angular/core';
import { PvotacaoComponent } from './pvotacao/pvotacao';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PvotacaoComponent],
  template: `
    <main>
      <h1>Votação de Personagens</h1>
      <app-pvotacao></app-pvotacao>
    </main>
  `,
  styles: [`
    main {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    h1 {
      color: #333;
      text-align: center;
    }
  `]
})
export class App {}
