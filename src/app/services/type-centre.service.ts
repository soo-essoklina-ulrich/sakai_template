import { Injectable } from '@angular/core';
import { TypeCentre } from '../models/type-centre';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeCentreService {
  private agentPostUrl = 'http://localhost:8080/api/region/';

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

  postAgentPost(type: TypeCentre): Observable<any> {
    return this.httpClient.post(this.agentPostUrl+"save", type);
  }

  updateAgentPost(id: number,type: TypeCentre): Observable<any> {
    return this.httpClient.put(`${this.agentPostUrl+"update"}${id}`, type);
  }
}
