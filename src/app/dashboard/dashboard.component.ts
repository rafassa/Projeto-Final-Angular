import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Carro } from '../interfaces/Carro.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private http: HttpClient){}
  carros:Carro[] | null=null
  getAPI(){
    const apiUrl="http://localhost:3001/vehicles"
this.http.get(apiUrl).subscribe({
  next: (resposta:any)=>{
    this.carros = resposta.vehicles
   
  },
  error:(error:any)=> {
    error.error.message
  }  
 })
  }

  teste=0
  aumento(){
    this.teste++
  }


 

}
