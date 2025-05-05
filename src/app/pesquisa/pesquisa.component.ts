import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { catchError, debounce, debounceTime, distinctUntilChanged, filter, switchMap, of} from 'rxjs';
import { BarraService } from '../services/barra.service';
import { Data } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pesquisa',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.css'
})
export class PesquisaComponent {
  service = inject(BarraService)
pesquisaControl: FormControl = new FormControl("");
dataList:Data[]| null=null
constructor(){
  this.pesquisaControl.valueChanges.pipe(
    debounceTime(500),
    filter((search:string)=> search.trim().length> 19),
    switchMap(search => this.service.PostSearch(search).pipe(
      catchError(error=>{
        console.log("erro aos buscar vin", error)
        return of({message:"VIN não encontrado"})
      })
    ))
  ).subscribe((res:any)=>{
    this.dataList = Array.isArray(res) ? res : [res]
  
    console.log("Resposta da API:", res)
  })
}
}
