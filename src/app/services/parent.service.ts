import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parents } from '../models/parents';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  private parentsUrl = 'http://localhost:8080/api/parents/';

  constructor(private httpClient: HttpClient) { }

  getAllParents(): Observable<any> {
    return this.httpClient.get(this.parentsUrl+"all");
  }

  getParentById(id: number): Observable<any> {
    return this.httpClient.get(this.parentsUrl + id);
  }

  deleteParent(id: number): Observable<any> {
    return this.httpClient.delete(this.parentsUrl + id);
  }

  postParent(parent: Parents): Observable<any> {
    return this.httpClient.post(this.parentsUrl+"save", parent);
  }

  updateParent(id: number, parent: Parents): Observable<any> {
    return this.httpClient.put(`${this.parentsUrl+"update"}${id}`, parent);
  }
}
