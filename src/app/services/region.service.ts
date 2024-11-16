import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
 
  private agentPostUrl = 'http://localhost:8080/api/region/';

  constructor(private httpClient: HttpClient) { }

  getAllRegionPosts(): Observable<any> {
    return this.httpClient.get(this.agentPostUrl+"all");
  }

  getRegionPostById(id: number): Observable<any> {
    return this.httpClient.get(this.agentPostUrl + id);
  }

  deleteRegionPost(id: number): Observable<any> {
    return this.httpClient.delete(this.agentPostUrl + id);
  }

  postRegion(region: Region): Observable<any> {
    return this.httpClient.post(this.agentPostUrl+"save", region);
  }

  updateRegion(id: number, region: Region): Observable<any> {
    return this.httpClient.put(`${this.agentPostUrl+"update"}${id}`, region);
  }
}
