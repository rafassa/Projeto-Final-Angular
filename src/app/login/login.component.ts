import { Component } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { User } from '../interfaces/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:User[]=[]
  constructor(private service:AutenticacaoService, private router:Router){}
  mensagemDeErro:string | null=null

  
  
  addUser(user:User[]){
    console.log(user)
    this.service.postAPI(user).subscribe({
      next: (data:User[]) =>{
        this.router.navigate(['home'],{queryParams:{usuario:this.user}})
        
      },
      error:(error)=> {
        this.mensagemDeErro=error.error.message
      }      
    })

    
  }

}