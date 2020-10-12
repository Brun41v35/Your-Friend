import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  funcButton() {
    let arr = ["Voce e a melhor pessoa","Acredite nos seus sonhos","Voce e incrivel!!"];

      var index = Math.floor(Math.random() * 3);  
      // alert(arr[index]);
      document.getElementById("frase").innerText = arr[index]
    
  }
}
