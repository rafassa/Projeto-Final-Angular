import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AutenticacaoService {

constructor(){}
  armazenar(){
    return[
      {usuario: "rafael", senha:"123"}
      

    ]

  }
}
