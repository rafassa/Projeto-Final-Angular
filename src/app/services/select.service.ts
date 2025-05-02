import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor(private http:HttpClient){}


  getApi(){
    const apiUrl="http://localhost:3001/vehicles"
    return  this.http.get(apiUrl)
  }


  
}
