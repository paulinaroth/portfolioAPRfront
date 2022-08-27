import { Component, OnInit } from '@angular/core';
/*import { PortfolioService } from 'src/app/services/portfolio.service';*/
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myPortfolioContact:any={};
  person:any={};
  
  constructor(/*private dataPortfolio:PortfolioService,*/
              private personService:PersonService) { }

  ngOnInit(): void {
    /*this.dataPortfolio.obtainData().subscribe(data=>{
      this.myPortfolioContact=data;
    })*/

    this.personService.getPerson().subscribe(resp=>{
      this.person=resp;
    });

    
  }

}

