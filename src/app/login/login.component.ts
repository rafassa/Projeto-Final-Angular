import { Component } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/Usuario.interface';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  constructor(private service:AutenticacaoService, private router:Router){}
  mensagemDeErro:string | null=null
  isChecked = false;
checkboxVar:any
ngOnInit(){
  const checkbox = localStorage.getItem('valor',)
  if(checkbox){
    this.checkboxVar = JSON.parse(checkbox)
  }

  if(this.checkboxVar == true){
    this.router.navigateByUrl('/home')
  }
}
  
  
  addUser(user:Usuario[]){
    console.log(user)
    this.service.postAPI(user).subscribe({
      next: (data:Usuario[]) =>{
        this.router.navigateByUrl('/home')
        this.service.getApiInformation(data)
       this.service.pegarValorCheck(this.isChecked)
      },
      error:(error)=> {
        this.mensagemDeErro=error.error.message
      }      
    })

    
  }

}