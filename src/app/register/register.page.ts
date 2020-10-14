import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username:string;
  password:string;

  constructor(private router: Router) { }

  ngOnInit() {}

  salva(){
      alert("Usuario adicionado!!!")
  }
  
  goBack(){
    this.router.navigate(['login'])
  }

}
