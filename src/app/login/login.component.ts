import { Component } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  constructor(private service:AutenticacaoService, private router:Router){}
  mensagemDeErro:string | null=null

  
  
  addUser(user:string){
    console.log(user)
    this.service.postAPI(user).subscribe({
      next: (data:any) =>{
        this.router.navigateByUrl('/home')
        this.service.getApiInformation(data)
        // this.service.setApiData(data)
      },
      error:(error)=> {
        this.mensagemDeErro=error.error.message
      }      
    })

    
  }

}