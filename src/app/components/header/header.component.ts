import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { AuthService } from 'src/app/services/auth.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  person:Person={
    id: 0,
    name: '',
    title: '',
    about: '',
    profileimg: '',
    email: '',
    province: {
      id: 0,
      name: ''
    },
    location: {
      id: 0,
      provinceId: 0,
      name: ''
    }
  };
  loggedUser = this.authService.getLoggedUser();
  
  constructor(
              private personService:PersonService,
              private router:Router,
              private authService:AuthService) { }

  ngOnInit(): void {
    
    this.personService.getPerson().subscribe(resp=>{
      this.person=resp;
    });

  
  }
  

  logOut(){
    this.authService.logout();
  }

}
