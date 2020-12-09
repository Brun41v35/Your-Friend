import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {
    this.renderDicas()
  }

  async renderDicas() {
    const { data } = await axios.get('https://aps-api.gateway.linkapi.com.br/v1/dicas');
    const { dicas } = data;

    let items = '';
    for(const dica of dicas) {
      items = items.concat(
        `<ion-item>
          <ion-label>
            <h2><b>${dica.id}°</b></h2>
            <h3>${dica.title}</h3>
            <p>${dica.description}</p>
          </ion-label>
        </ion-item>`
      )
    }

    document.getElementById("list").innerHTML = items;
  }
}
