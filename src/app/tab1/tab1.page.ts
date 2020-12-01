import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  funcButton() {
    const arr = [
      "Você é a melhor pessoa!",
      "Acredite nos seus sonhos!",
      "Você é incrivel!",
      "A persistência é o caminho do êxito", 
      "No meio da dificuldade encontra-se a oportunidade",
      "Imagine uma nova história para sua vida e acredite nela",
      "O sucesso é ir de fracasso em fracasso sem perder entusiasmo",
      "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance",
      "Só existe um êxito: a capacidade de levar a vida que se quer",
      "A coragem não é ausência do medo; é a persistência apesar do medo",
      "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos"
    ];

    const index = Math.floor(Math.random() * 11);  

    document.getElementById("frase").innerText = arr[index]
  }
}
