import { Component } from '@angular/core';

@Component({
  selector: 'app-ex12',
  standalone: false,
  templateUrl: './ex12.html',
  styleUrl: './ex12.css',
})
export class Ex12 {
  nome = '';
  disciplinas = 1;
  mensagem = '';

  aumentar() {
    this.disciplinas++;
  }

  diminuir() {
    if (this.disciplinas > 1) {
      this.disciplinas--;
    }
  }

  realizarMatricula() {
    this.mensagem = 'Matrícula realizada para ' + this.nome +
      ' com ' + this.disciplinas + ' disciplinas.';
  }

}
