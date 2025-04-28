import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AutenticacaoService {


constructor(private http:HttpClient){}
// callAPI():Observable<User[]>{
//   const apiUrl="http://localhost:3001/login"
//   return this.http.get<User[]>(apiUrl)
// }




postAPI(user:User[]):Observable<User[]>{
  const apiUrl="http://localhost:3001/login"
  return this.http.post<User[]>(apiUrl, user)
}
}

