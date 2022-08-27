import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private api_server = "https://portfolioaprothermelback.herokuapp.com/";

  constructor(private httpClient : HttpClient) { }

  

  public getEducationByPerson(personId:number):Observable<any>{
    return this.httpClient.get(`${this.api_server}education/byPerson/${personId}`);

  }

  public getEducationById(id:number):Observable<any>{
    return this.httpClient.get(`${this.api_server}education/search/${id}`);
  }

  public registerEducation(personId:number, education:Education):Observable<any>{
    return this.httpClient.post(`${this.api_server}person/${personId}/education/add`,education);
  }

  public updateEducation(id:number,education:Education):Observable<any>{
    return this.httpClient.put(`${this.api_server}education/edit/${id}`,education);
  }

  
  public deleteEducation(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.api_server}education/delete/${id}`);
  }


}
