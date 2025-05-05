import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { BarraService } from '../services/barra.service';

@Component({
  selector: 'app-pesquisa',
  imports: [ReactiveFormsModule],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.css'
})
export class PesquisaComponent {
  service = inject(BarraService)
pesquisaControl: FormControl = new FormControl("");
constructor(){
  this.pesquisaControl.valueChanges.pipe(
    debounceTime(1),
    distinctUntilChanged(),
    switchMap(search => this.service.PostSearch(search))
  ).subscribe((res:any)=>{
    console.log("é a resposta",res)
  })
}
}
