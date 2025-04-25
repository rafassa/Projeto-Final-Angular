import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AutenticacaoService {


dadosArmazenados:any ={}
constructor(){}
 
saveFormData(usuario:string, senha:string){
 
  this.dadosArmazenados ={ usuario: usuario, senha: senha};
  console.log('dados armazenados no service', this.dadosArmazenados)
}

getDataForm(){
  return this.dadosArmazenados;
}

}
