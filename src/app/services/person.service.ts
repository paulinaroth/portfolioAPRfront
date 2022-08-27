import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private api_server = "https://portfolioaprothermelback.herokuapp.com/person/";

  constructor(private http: HttpClient) { }

  public getPerson():Observable<Person>{
    return this.http.get<Person>(`${this.api_server}search/1`);
  }

  public editPerson(id:number, person:Person):Observable<any>{
    return this.http.put(`${this.api_server}edit/${id}`, person);
  }

  

}

