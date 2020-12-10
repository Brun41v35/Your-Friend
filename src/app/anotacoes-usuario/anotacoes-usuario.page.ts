import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-anotacoes-usuario',
  templateUrl: './anotacoes-usuario.page.html',
  styleUrls: ['./anotacoes-usuario.page.scss'],
})
export class AnotacoesUsuarioPage implements OnInit {
  input_anotacao: string;

  constructor(
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit() {}

  async save() {
    let anotacoes = [];

    await this.storage.get('anotacoes').then((val) => {
      if (!val) {
        anotacoes = [];
      }
      else {
        anotacoes = val;
        anotacoes.push(this.input_anotacao);
      }
    });

    await this.storage.set('anotacoes', anotacoes);

    this.input_anotacao = '';
  }
}
