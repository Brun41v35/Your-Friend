import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnotacoesUsuarioPageRoutingModule } from './anotacoes-usuario-routing.module';

import { AnotacoesUsuarioPage } from './anotacoes-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnotacoesUsuarioPageRoutingModule
  ],
  declarations: [AnotacoesUsuarioPage]
})
export class AnotacoesUsuarioPageModule {}
