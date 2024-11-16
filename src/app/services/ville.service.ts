import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ville } from '../models/ville';
import { environment } from '../../environments/environment';

const url = environment.api ;
@Injectable({
  providedIn: 'root'
})
export class VilleService {

  private agentPostUrl = url+'ville/';

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

  postAgentPost(ville: Ville): Observable<any> {
    return this.httpClient.post(this.agentPostUrl+"save", ville);
  }

  updateAgentPost(id: number,ville: Ville): Observable<any> {
    return this.httpClient.put(`${this.agentPostUrl+"update"}${id}`, ville);
  }
}
