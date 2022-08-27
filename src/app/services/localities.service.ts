import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalitiesService {

  api_server = "https://portfolioaprothermelback.herokuapp.com/location/byProvince/";
  constructor(private httpClient:HttpClient) { }

  public getAllLocalitiesByProvince(provinceId:any):Observable<any>{
    return this.httpClient.get(`${this.api_server}${provinceId}`);
  }


}
