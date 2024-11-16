import { Injectable } from '@angular/core';
import { AttestationNaissance } from '../models/attestation-naissance';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttestationNaissanceService {
  private agentPostUrl = 'http://localhost:8080/api/attestation/';


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.agentPostUrl+"centre-sante/attestations");
  }

  getAllNonValide(): Observable<any> {
    return this.httpClient.get(this.agentPostUrl+"non-validees");
  }

  getAllNonValideMairie(): Observable<any> {
    return this.httpClient.get(this.agentPostUrl+"nonValidees/mairie");
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get(this.agentPostUrl + id);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.agentPostUrl + id);
  }

  post(attestation: AttestationNaissance): Observable<any> {
    return this.httpClient.post(this.agentPostUrl+"save", attestation);
  }

  update(id: number, attestation: AttestationNaissance): Observable<any> {
    return this.httpClient.put(`${this.agentPostUrl+"update"}${id}`, attestation);
  }
}
