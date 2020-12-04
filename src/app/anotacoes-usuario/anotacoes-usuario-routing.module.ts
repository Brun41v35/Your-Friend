import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnotacoesUsuarioPage } from './anotacoes-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: AnotacoesUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnotacoesUsuarioPageRoutingModule {}
