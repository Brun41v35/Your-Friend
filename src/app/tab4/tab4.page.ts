import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  constructor(
    private router: Router,
    private storage: Storage,
  ) {
    this.renderAnotacoes()
  }

  ngOnInit() {}

  anotacoes = [];
  async renderAnotacoes() {
    await this.storage.get('anotacoes').then((val) => {
      if (!val) {
        this.anotacoes = [];
      }
      else {
        this.anotacoes = val;
      }
    });
  }

  goToNote() {
    this.router.navigate(['anotacoes-usuario'])
  }

  async delete(index: number){
    this.anotacoes.splice(index, 1);
    await this.storage.set('anotacoes', this.anotacoes);
  }
}
