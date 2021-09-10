import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email:string;
  clave:string;
  constructor() { }

  ngOnInit() {}

  autocompletar(){
    this.clave='123456';
    this.email='pepe@gmail.com';
  }


  ingresar(){
    alert(this.clave + " "+this.email);
  }

}
