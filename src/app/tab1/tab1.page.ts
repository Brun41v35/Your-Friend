import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  funcButton() {
    const arr = ["Voce é a melhor pessoa",
    "Acredite nos seus sonhos",
    "Voce é incrivel","A persistência é o caminho do êxito.", 
    "No meio da dificuldade encontra-se a oportunidade.",
    "Imagine uma nova história para sua vida e acredite nela.",
  "O sucesso é ir de fracasso em fracasso sem perder entusiasmo"];

    const index = Math.floor(Math.random() * 7);  

    document.getElementById("frase").innerText = arr[index]
  }
}
