import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

const url = environment.api ;

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {
  private StatistiqueUrl = url+'statistiques';

  constructor(private httpClient: HttpClient) { }

  getNaissancesParPrefecture(mois: number, annee: number): Observable<Object[]> {
    const params = new HttpParams()
    .set('mois', mois)
    .set('annee', annee);
    return this.httpClient.get<Object[]>(this.StatistiqueUrl + "/naissances/prefecture", { params });
  }

  getNaissancesParCentreSante(mois: number, annee: number): Observable<Object[]> {
    const params = new HttpParams()
    .set('mois', mois)
    .set('annee', annee);
    return this.httpClient.get<Object[]>(this.StatistiqueUrl +"/naissances/centre-sante", { params });
  }

  getNaissancesParMairie(mois: number, annee: number): Observable<Object[]> {
    const params = new HttpParams()
    .set('mois', mois)
    .set('annee', annee);
    return this.httpClient.get<Object[]>(this.StatistiqueUrl +"/naissances/mairie", { params });
  }

  getDeclarationsParMairie(mois: number, annee: number): Observable<Object[]> {
    const params = new HttpParams()
    .set('mois', mois)
    .set('annee', annee);
    return this.httpClient.get<Object[]>(this.StatistiqueUrl +"/declarations/mairie", { params });
  }

  // Methods with additional parameter
  getNaissancesParPrefectureWithNom(mois: number, annee: number, prefectureNom: string): Observable<Object[]> {
    const params = new HttpParams()
    .set('mois', mois)
    .set('annee', annee)
    .set('prefectureNom', prefectureNom);
    return this.httpClient.get<Object[]>(this.StatistiqueUrl +"/naissances/parPrefecture", { params });
  }

  getNaissancesParCentreSanteWithNom(mois: number, annee: number, centreSanteNom: string): Observable<Object[]> {
    const params = new HttpParams()
    .set('mois', mois)
    .set('annee', annee)
    .set('centreSanteNom', centreSanteNom);
    return this.httpClient.get<Object[]>(this.StatistiqueUrl +"/naissances/parCentre-sante", { params });
  }

  getNaissancesParMairieWithNom(mois: number, annee: number, mairieNom: string): Observable<Object[]> {
    const params = new HttpParams()
    .set('mois', mois)
    .set('annee', annee)
    .set('mairieNom', mairieNom);
    return this.httpClient.get<Object[]>(this.StatistiqueUrl +"/naissances/parMairie", { params });
  }

  getDeclarationsParMairieWithNom(mois: number, annee: number, mairieNom: string): Observable<Object[]> {
    const params = new HttpParams()
    .set('mois', mois)
    .set('annee', annee)
    .set('mairieNom', mairieNom);
    return this.httpClient.get<Object[]>(this.StatistiqueUrl +"/declarations/parMairie", { params });
  }
}
