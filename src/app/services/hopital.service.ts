import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CentreSante } from '../models/CentreSante';

@Injectable({
  providedIn: 'root'
})
export class HopitalService {
  private agentPostUrl = 'http://localhost:8080/api/centreSante/';

  constructor(private httpClient: HttpClient) { }

  getAllCentreSantePosts(): Observable<any> {
    return this.httpClient.get(this.agentPostUrl+"all");
  }

  getCentreSantePostById(id: number): Observable<any> {
    return this.httpClient.get(this.agentPostUrl + id);
  }

  deleteCentreSantePost(id: number): Observable<any> {
    return this.httpClient.delete(this.agentPostUrl + id);
  }

  postCentreSantePost(hopital: CentreSante): Observable<any> {
    return this.httpClient.post(this.agentPostUrl+"save", hopital);
  }

  updateCentreSantePost(id: number, hopital: CentreSante): Observable<any> {
    return this.httpClient.put(`${this.agentPostUrl+"update"}${id}`, hopital);
  }
}
