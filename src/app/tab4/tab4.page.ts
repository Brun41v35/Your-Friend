import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private router: Router,) {}

  ngOnInit() {}

  anotacoes = ['Preciso arrumar o meu quarto', 'Levar o meu cachorro para passear', 'Finalizar atividades'];

  goToNote() {
    this.router.navigate(['anotacoes-usuario'])
  }

  delete(index){
    this.anotacoes.splice(index, 1);
  }
}
