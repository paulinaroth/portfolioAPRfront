import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import  swal  from 'sweetalert2';

import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  projectForm: FormGroup;  
  person:Person={id: 0, name: '', title: '', about: '', profileimg: '', email: '', province: {id: 0, name: ''}, location: {id: 0, provinceId: 0, name: ''}};
  project:Project;

  constructor(private personService:PersonService,
              private projectService:ProjectService,
              private fb:FormBuilder,
              private router: Router) { }

  ngOnInit(): void {

    this.projectForm = this.fb.group({
      
      name:['',Validators.required],
      image:['',Validators.required],
      description:['',Validators.required],
      ryear:['',Validators.required],
      site:['',Validators.required]
    })
  }

  saveProject(personId:number):void{
    this.personService.getPerson().subscribe(
      resp=>{this.person=resp;
      this.projectService.registerProject(this.person.id, this.projectForm.value).subscribe(
        nProj=>{this.project= nProj;
          //console.log(nProj);
          this.router.navigate(['/portfolio']);
          swal('Proyecto agregado',`El nuevo proyecto ha sido agregado con exito`,`success`);
        }
      )}   
    )

  }

}
