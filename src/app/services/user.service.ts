import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import {FormBuilder, Validators} from "@angular/forms";
import {Validation} from "../models/validation";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiulr = environment.api;


  constructor(private http: HttpClient, private fb: FormBuilder) { }

    createForm() {
        return this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

  login(data:{username:string,password:string}):Observable<any>{
    return this.http.post<any>(this.apiulr+`api/connexion`, data);
  }

  Register(user:any):Observable<any>{
    return this.http.post(this.apiulr+`api/connexion`,user);
  }

  Activation(validation:Validation):Observable<any>{
    return this.http.post(this.apiulr+`api/connexion`,validation);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
