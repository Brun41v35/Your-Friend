import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username:string;
  password:string;

  constructor(private router: Router) { }

  ngOnInit() {}

  goLogin() {
    if(this.username == "Bruno" && this.password == "123") {
      this.router.navigate(['tabs'])
    } else {
      alert("Esse usuario nao existe")
    }
  }

  goRegister(){
     this.router.navigate(['register'])
  }

}
