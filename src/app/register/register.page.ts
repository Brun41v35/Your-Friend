import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService, User } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  //Variaveis
  username: string;
  password: string;
  key: string = "nome";
  otherKey: string = "outroNome";

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit() {}

  save(){
    this.registerService.save(this.key, this.username);
    this.registerService.save(this.otherKey, this.password);
    alert("Salvo com sucesso")
  }

  load(){
    this.registerService.get(this.key, this.otherKey);
  }
  
  goBack(){
    this.router.navigate(['login'])
  }
}
