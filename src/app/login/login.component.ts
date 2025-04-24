import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule } from '@angular/forms';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuarios = new FormControl( )

// Data:{
//   usuario:string;
//   senha:string;
// }[] | undefined
// constructor(private autenticar:AutenticacaoService){}
// ngOnInit(){
//   this.Data = this.autenticar.armazenar();
  

// }
}
