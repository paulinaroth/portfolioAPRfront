import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import  swal  from 'sweetalert2';

import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.css']
})
export class EducationAddComponent implements OnInit {

  educationForm: FormGroup;  
  person:Person={id: 0, name: '', title: '', about: '', profileimg: '', email: '', province: {id: 0, name: ''}, location: {id: 0, provinceId: 0, name: ''}};
  education:Education;

  constructor(private personService:PersonService,
              private educationService:EducationService,
              private fb:FormBuilder,
              private router: Router) { }

  ngOnInit(): void {

    this.educationForm = this.fb.group({
      
      school:['',Validators.required],
      title:['',Validators.required],
      logo:['',Validators.required],
      description:['',Validators.required],
      site:['',Validators.required],
      start_year:['',Validators.required],
      ending_year:['',Validators.required]
    })

  }

  saveEducation(personId:number):void{
    this.personService.getPerson().subscribe(
      resp=>{this.person=resp;
      this.educationService.registerEducation(this.person.id, this.educationForm.value).subscribe(
        nEduc=>{this.education= nEduc;
          //console.log(nEduc);
          this.router.navigate(['/portfolio']);
          swal('Educación agregada',`La nueva instancia educativa ha sido agregada con exito`,`success`); 
        }
      )}   
    )

  }

}
