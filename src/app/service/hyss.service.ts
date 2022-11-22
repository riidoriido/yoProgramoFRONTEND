import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hyss } from '../model/hyss';

@Injectable({
  providedIn: 'root',
})
export class HyssService {
  URL = 'https://backendfv.herokuapp.com/skills/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Hyss[]> {
    return this.httpClient.get<Hyss[]>(this.URL + 'lista');
  }

  public details(id: number): Observable<Hyss> {
    return this.httpClient.get<Hyss>(this.URL + `detail/${id}`);
  }

  public save(hyss: Hyss): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', hyss);
  }

  public update(id: number, hyss: Hyss): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, hyss);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.URL + `delete/${id}`);
  }
}
