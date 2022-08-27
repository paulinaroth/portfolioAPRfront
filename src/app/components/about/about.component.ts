import { Component, OnInit,} from '@angular/core';


import { Person } from 'src/app/models/person';
import { AuthService } from 'src/app/services/auth.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent implements OnInit {
  
  person:Person = {} as Person;
  loggedUser = this.authService.getLoggedUser();
  
  constructor(private personService:PersonService,
              private authService:AuthService) { }

  ngOnInit(): void {
   

    this.personService.getPerson().subscribe(resp=>{
      this.person=resp;
    });
  }

  

}
