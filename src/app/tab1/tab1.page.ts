import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  async funcButton() {
    const { data: first_data } = await axios.get('https://allugofrases.herokuapp.com/frases');
    const first_phrases = first_data.map(item => item.frase);

    const { data: second_data } = await axios.get('https://aps-api.gateway.linkapi.com.br/v1/frases');
    const second_phrases = second_data.frases;

    const arr = [
      ...first_phrases,
      ...second_phrases
    ];
    
    console.log(arr);

    const index = Math.floor(Math.random() * 11);  

    document.getElementById("frase").innerText = arr[index]
  }
}
