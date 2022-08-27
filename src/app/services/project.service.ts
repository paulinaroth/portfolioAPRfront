import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private api_server = "https://portfolioaprothermelback.herokuapp.com/";

  constructor(private httpClient : HttpClient) { }

  public getProjectsByPerson(personId:number):Observable<any>{
    return this.httpClient.get(`${this.api_server}projects/byPerson/${personId}`);

  }

  public getProjectById(id:number):Observable<any>{
    return this.httpClient.get(`${this.api_server}project/search/${id}`);
  }

  public registerProject(personId:number, project:Project):Observable<any>{
    return this.httpClient.post(`${this.api_server}person/${personId}/project/add`,project);
  }

  public updateProject(id:number,project:Project):Observable<any>{
    return this.httpClient.put(`${this.api_server}project/edit/${id}`,project);
  }
  
  public deleteProject(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.api_server}project/delete/${id}`);
  }

}
