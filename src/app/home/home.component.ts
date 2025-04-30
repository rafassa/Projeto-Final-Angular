import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Usuario } from '../interfaces/Usuario.interface';
import { AutenticacaoService } from '../services/autenticacao.service';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';





@Component({
  selector: 'app-home',
  imports: [BarraLateralComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  name:Usuario | null=null

  ngOnInit():void{
    const nomeUsuario = localStorage.getItem('apiUsuarios')
    if(nomeUsuario){
      this.name = JSON.parse(nomeUsuario)
      
    }
  }

  service = inject(AutenticacaoService)

  constructor(private router:Router, private route:ActivatedRoute){}
  logOut(){
   
    this.service.removeStorage()
    this.router.navigateByUrl('')
  }

}
