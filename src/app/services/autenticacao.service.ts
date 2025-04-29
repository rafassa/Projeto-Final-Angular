import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root'
})


export class AutenticacaoService {
  apiUsuarios:any = []=[]
// private dataLink= new   BehaviorSubject<any>(null)
// dataSalva = this.dataLink.asObservable()
constructor(private http:HttpClient){}


getApiInformation(apiInfo:any){
this.apiUsuarios = apiInfo
console.log("esta aqui a array",this.apiUsuarios)
localStorage.setItem(this.apiUsuarios, JSON.stringify(apiInfo))
}

//   setApiData(data:any){
// this.dataLink.next(data)
//   }
postAPI(x:any){
  const apiUrl="http://localhost:3001/login"
  return this.http.post(apiUrl, x)
}
}

