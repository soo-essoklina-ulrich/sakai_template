import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mairie } from '../models/Mairie';

@Injectable({
  providedIn: 'root'
})
export class MairieService {
  private agentPostUrl = 'http://localhost:8080/api/mairie/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.agentPostUrl+"all");
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get(this.agentPostUrl + id);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.agentPostUrl + id);
  }

  post(etatCivil: Mairie): Observable<any> {
    return this.httpClient.post(this.agentPostUrl+"save", etatCivil);
  }

  update(id: number, etatCivil: Mairie): Observable<any> {
    return this.httpClient.put(`${this.agentPostUrl+"update"}${id}`, etatCivil);
  }
}
