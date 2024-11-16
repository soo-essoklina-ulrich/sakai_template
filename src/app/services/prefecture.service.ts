import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prefecture } from '../models/prefecture';

@Injectable({
  providedIn: 'root'
})
export class PrefectureService {
  private agentPostUrl = 'http://localhost:8080/api/prefecture/';

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

  post(prefecture: Prefecture): Observable<any> {
    return this.httpClient.post(this.agentPostUrl+"save", prefecture);
  }

  update(id: number,prefecture: Prefecture): Observable<any> {
    return this.httpClient.put(`${this.agentPostUrl+"update"}${id}`, prefecture);
  }
}
