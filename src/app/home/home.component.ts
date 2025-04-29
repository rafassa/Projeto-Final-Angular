import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Usuario } from '../interfaces/Usuario.interface';
import { AutenticacaoService } from '../services/autenticacao.service';
import { AdminComponent } from '../admin/admin.component';




@Component({
  selector: 'app-home',
  imports: [AdminComponent],
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
