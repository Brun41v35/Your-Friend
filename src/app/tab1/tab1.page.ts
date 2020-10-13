import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  funcButton() {
    const arr = ["Voce é a melhor pessoa","Acredite nos seus sonhos","Voce é incrivel!!!"];

    const index = Math.floor(Math.random() * 3);  

    document.getElementById("frase").innerText = arr[index]
  }
}
