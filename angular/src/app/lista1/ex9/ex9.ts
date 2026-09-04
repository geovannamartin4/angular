import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.css',
})
export class Ex9 {
  quantidade = 0;

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    if(this.quantidade > 0) {
      this.quantidade--;
    }
  }
}
