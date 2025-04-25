import { Component } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private service:AutenticacaoService){}
 logins?:NgForm
 usuario: string = ''; 
 senha: string = ''; 

  login(valor:NgForm){
   this.usuario = valor.value.usuario;
   this.senha = valor.value.senha;
  console.log(this.usuario);
  console.log(this.senha);
  this.service.saveFormData(this.usuario, this.senha)

  }

}