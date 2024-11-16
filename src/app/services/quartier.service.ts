import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quartier } from '../models/quartier';

@Injectable({
  providedIn: 'root'
})
export class QuartierService {
  private agentPostUrl = 'http://localhost:8080/api/quartier/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.agentPostUrl+"all");
  }

  getAgent(id: number): Observable<any> {
    return this.httpClient.get(this.agentPostUrl + id);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.agentPostUrl + id);
  }

  post(quartier: Quartier): Observable<any> {
    return this.httpClient.post(this.agentPostUrl+"save", quartier);
  }

  update(id: number,quartier: Quartier): Observable<any> {
    return this.httpClient.put(`${this.agentPostUrl+"update"}${id}`, quartier);
  }
}
