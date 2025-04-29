import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';



@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  

  constructor(private service2:AutenticacaoService){}
  user:any
  ngOnInit(){
     this.user = this.service2
     console.log()
  }
  logOut(){

  }

}
