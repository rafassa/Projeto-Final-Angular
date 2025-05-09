
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Carro } from '../interfaces/Carro.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectService } from '../services/select.service';

@Component({
  selector: 'app-select-dash-board',
  imports: [CommonModule, FormsModule],
  templateUrl: './select-dash-board.component.html',
  styleUrl: './select-dash-board.component.css'
})
export class SelectDashBoardComponent {
  private service = inject(SelectService)

  constructor(private http: HttpClient, ){}

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


