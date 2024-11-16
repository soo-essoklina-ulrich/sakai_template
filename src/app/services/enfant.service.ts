import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enfant } from '../models/Enfant';


@Injectable({
  providedIn: 'root'
})
export class EnfantService {
  private agentPostUrl = 'http://localhost:8080/api/enfant/';

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

  post(enfant: Enfant): Observable<any> {
    return this.httpClient.post(this.agentPostUrl+"save", enfant);
  }

  update(id: number, enfant: Enfant): Observable<any> {
    return this.httpClient.put(`${this.agentPostUrl+"update"}${id}`, enfant);
  }
}
