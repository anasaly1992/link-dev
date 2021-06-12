import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LatestNewsService {
  articles:any;
  constructor(private http: HttpClient) { }

  public getJSON(): Observable<any> {
    return this.http.get("../../assets/jsons/newsapi.json");
}
}
