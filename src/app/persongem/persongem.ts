import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persongem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persongem.html',
  styleUrls: ['./persongem.css']
})
export class PersongemComponent {
  @Input() nome: string = '';
  @Input() imagem: string = '';
  @Input() votos: number = 0;
  
  @Output() votar = new EventEmitter<void>();
  
  onVotar() {
    this.votar.emit();
  }
}
