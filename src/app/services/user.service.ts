import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Validation } from '../models/validation';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUrl = 'http://localhost:8080/api/connexion';
  // private logoutUrl = 'http://localhost:8000/accounts/api/logout/user/';
  private register = 'http://localhost:8080/api/inscription';
  private activation = 'http://localhost:8080/api/activation';


  constructor(private http: HttpClient) { }

  login(data:any){
    return this.http.post<any>(this.loginUrl, data);
  }

  Register(user:any):Observable<any>{
    return this.http.post(this.register,user);
  }

  Activation(validation:Validation):Observable<any>{
    return this.http.post(this.activation,validation);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
