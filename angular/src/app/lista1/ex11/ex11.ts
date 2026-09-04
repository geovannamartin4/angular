import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.css',
})
export class Ex11 {

  produto = 'Mouse';
  preco = 120;
  quantidade = 1;
  mensagem = '';

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  get total(): number {
    return this.preco * this.quantidade;
  }

  adicionar() {
    this.mensagem = 'Você adicionou ' + this.quantidade + 'x ' + this.produto + ' ao carrinho.';
  }
}
