import { Injectable } from '@angular/core';
import { Building } from '../model/Building';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'config';


@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  private apiServiceUrl = `${API_URL}/building`;

  constructor(private http: HttpClient){}

  findAll(): Observable<Building[]> {
    return this.http.get<Building[]>(`${this.apiServiceUrl}`);
  }

  public getBuilding(idBuilding: number): Observable<Building> {
    let urlGet = this.apiServiceUrl + '/get/' + idBuilding;
    return this.http.get<Building>(urlGet);
  }
}
