import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Skill} from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private api_server = "https://portfolioaprothermelback.herokuapp.com/";

  constructor(private httpClient : HttpClient) { }

  
  public getSkillByPerson(personId:number):Observable<any>{
    return this.httpClient.get(`${this.api_server}skill/byPerson/${personId}`);

  }

  public getSkillById(id:number):Observable<any>{
    return this.httpClient.get(`${this.api_server}skill/search/${id}`);
  }

  public registerSkill(personId:number, skill:Skill):Observable<any>{
    return this.httpClient.post(`${this.api_server}person/${personId}/skill/add`,skill);
  }

  public updateSkill(id:number,skill:Skill):Observable<any>{
    return this.httpClient.put(`${this.api_server}skill/edit/${id}`,skill);
  }

  
  public deleteSkill(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.api_server}skill/delete/${id}`);
  }

  
}
