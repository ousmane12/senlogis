import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Building } from '../model/Building';
import { Observable } from 'rxjs';
import { Appartment } from '../model/appartment';
import { AppartmentDto } from '../model/appartmentDto';
import { catchError } from 'rxjs/operators';
import { API_URL } from 'config';

@Injectable({
  providedIn: 'root'
})
export class AppartmentService {

  private apiServiceUrl = `${API_URL}/appartment`;

  constructor(private http: HttpClient){}

  findAll(): Observable<Appartment[]> {
    return this.http.get<Appartment[]>(`${this.apiServiceUrl}`);
  }

  findAllForBuilding(building: number): Observable<Appartment[]> {
    return this.http.get<Appartment[]>(this.apiServiceUrl + '/building/' + building);
  }

  findAllFreeForBuilding(building: number): Observable<Appartment[]> {
    return this.http.get<Appartment[]>(this.apiServiceUrl + '/building/free/' + building);
  }

  getAppartment(idAppartment: number): Observable<Appartment> {
    let urlGet = this.apiServiceUrl + '/get/' + idAppartment;
    return this.http.get<Appartment>(urlGet);
  }
}
