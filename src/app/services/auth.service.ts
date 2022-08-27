import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) {}

  async login(email:string, password:string){
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("Error en Login", error);
      return null;
    }
  }


  getLoggedUser(){
    return this.afauth.authState;

  }
  
  logout(){
    this.afauth.signOut();
  }
}
