import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Carro } from '../interfaces/Carro.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectService } from '../services/select.service';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule,BarraLateralComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private http: HttpClient, private service: SelectService){}
  carros:Carro[] | null=null
  selecionado=0
  carSelect:number=0
 

carroSelecionado(){
  this.service.getApi().subscribe({
    next: (resposta:any)=>{
    this.carros = resposta.vehicles
    console.log(this.carros)
    
      this.selecionado = this.carSelect
      console.log(this.selecionado)
    },
    
  })
}

  
 
  

 

}
