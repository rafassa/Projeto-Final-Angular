import { Component, inject } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';
import { FormsModule,  } from '@angular/forms';
import { CommonModule, } from '@angular/common';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/Usuario.interface';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  service = inject(AutenticacaoService)
  constructor( private router:Router){}
  mensagemDeErro:string | null=null

 marcado:boolean = false
  
  

  addUser(user:Usuario[]){
   


    this.service.postAPI(user).subscribe({
      next: (data:any) =>{
        this.service.getApiInformation(data)
        if(this.marcado == true){ this.service.loginAuto(data)}
        this.router.navigateByUrl('/home')
        
      },
      error:(error)=> {
        this.mensagemDeErro=error.error.message
      }      
    })

    
  }

}