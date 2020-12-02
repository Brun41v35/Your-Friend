import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //Variaveis
  username: string;
  password: string

  key: string = "username";
  otherKey: string = "password";

  constructor(
    private router: Router,
    private registerService: RegisterService,
  ) {}

  ngOnInit() {}

  async goLogin() {
    var login = await this.registerService.get(this.key, this.otherKey);

    if (this.username === login.currentUser && this.password === login.currentPassword) {
      this.router.navigate(['tabs'])
    } 
    else {
      alert("Este usuário não existe!")
    }
  }

  goRegister(){
    this.router.navigate(['register'])
  }
}
