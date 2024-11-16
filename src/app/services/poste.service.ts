import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poste } from '../models/poste';

@Injectable({
  providedIn: 'root'
})
export class PosteService {
  private agentPostUrl = 'http://localhost:8080/api/poste/';

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

  post(poste: Poste): Observable<any> {
    return this.httpClient.post(this.agentPostUrl+"save", poste);
  }

  update(id: number, poste: Poste): Observable<any> {
    return this.httpClient.put(`${this.agentPostUrl+"update"}${id}`, poste);
  }
}
