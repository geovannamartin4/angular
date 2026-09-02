import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path: 'livros',
  loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule)
},

{
  path: 'aluno',
  loadChildren: () => import('./aluno/aluno-module').then(m => m.AlunoModule)
},

{
  path: 'exercicio1',
  loadChildren: () => import('./exercicio1/exercicio1-module').then(m => m.Exercicio1Module)
}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
