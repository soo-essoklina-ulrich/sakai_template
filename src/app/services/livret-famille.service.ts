import { Injectable } from '@angular/core';
import { LivretFamille } from '../models/livret-famille';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivretFamilleService {
  private agentPostUrl = 'http://localhost:8080/api/livretfamille/';

  constructor(private httpClient: HttpClient) { }

  getAllAgentPosts(): Observable<any> {
    return this.httpClient.get(this.agentPostUrl+"all");
  }

  getAgentPostById(id: number): Observable<any> {
    return this.httpClient.get(this.agentPostUrl + id);
  }

  deleteAgentPost(id: number): Observable<any> {
    return this.httpClient.delete(this.agentPostUrl + id);
  }

  postAgentPost(livret: LivretFamille): Observable<any> {
    return this.httpClient.post(this.agentPostUrl+"save", livret);
  }

  updateAgentPost(id: number, livret: LivretFamille): Observable<any> {
    return this.httpClient.put(`${this.agentPostUrl+"update"}${id}`, livret);
  }
}
