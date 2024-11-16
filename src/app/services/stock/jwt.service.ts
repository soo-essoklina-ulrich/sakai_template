import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  KEY_TOKEN = "token"

  constructor() { }

  stocktoken(token : string){
    localStorage.setItem(this.KEY_TOKEN, token);
  }

  gettoken(){
    return localStorage.getItem(this.KEY_TOKEN);
  }
}
