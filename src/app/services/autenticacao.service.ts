import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/Usuario.interface';

@Injectable({
  providedIn: 'root'
})


export class AutenticacaoService {
constructor(private http:HttpClient){}


getApiInformation(apiInfo:Usuario[]){
console.log(apiInfo)
localStorage.setItem('apiUsuarios', JSON.stringify(apiInfo))
}

loginAuto(apiInfo:Usuario[]){
  localStorage.setItem('informacoes', JSON.stringify(apiInfo)) 

}

removeStorage(){
localStorage.removeItem('apiUsuarios')
}

postAPI(user:Usuario[]){
  const apiUrl="http://localhost:3001/login"
  return this.http.post(apiUrl, user)
}
}

