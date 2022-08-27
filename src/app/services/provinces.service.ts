import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvincesService {

  private API_SERVER = "https://portfolioaprothermelback.herokuapp.com/provinces";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllProvinces():Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
}
