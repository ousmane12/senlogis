import { Injectable } from '@angular/core';
import { Type } from '../model/type';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'config';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private apiServiceUrl = `${API_URL}/type`;

  constructor(private http: HttpClient){}


  findAll(): Observable<Type[]> {
    return this.http.get<Type[]>(this.apiServiceUrl);
  }

  findByNom(nom: string): Observable<Type> {
    return this.http.get<Type>(this.apiServiceUrl + "/nom/" + nom);
  }

  findById(id: number): Observable<Type> {
    return this.http.get<Type>(this.apiServiceUrl + "/" + id);
  }
}
