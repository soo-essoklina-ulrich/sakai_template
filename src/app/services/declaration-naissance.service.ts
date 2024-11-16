import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeclarationNaissance } from '../models/DeclarationNaissance';

@Injectable({
  providedIn: 'root'
})
export class DeclarationNaissanceService {
  private agentPostUrl = 'http://localhost:8080/api/declaration-naissance/';

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

  post(certificat: DeclarationNaissance): Observable<any> {
    return this.httpClient.post(this.agentPostUrl+"save", certificat);
  }

  update(id: number, certificat: DeclarationNaissance): Observable<any> {
    return this.httpClient.put(`${this.agentPostUrl+"update"}${id}`, certificat);
  }
}
