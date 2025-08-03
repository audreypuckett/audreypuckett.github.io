import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SimpleMessage} from '../models/simple-message';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = "http://localhost:8080/";
  private HEADERS = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getWelcome(): Observable<SimpleMessage>{
    return this.http.get<SimpleMessage>(`${this.apiUrl}`, {headers:this.HEADERS});
  }
}
