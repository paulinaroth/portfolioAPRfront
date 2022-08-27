import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import  swal  from 'sweetalert2';

import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  projectForm: FormGroup;  
  project:Project;
  id:number;

  constructor(private projectService:ProjectService,
              private fb:FormBuilder,
              private activateRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.id = this.activateRouter.snapshot.params['id'];

    this.projectForm = this.fb.group({
      id:[0],
      name:['',Validators.required],
      image:['',Validators.required],
      description:['',Validators.required],
      ryear:['',Validators.required],
      site:['',Validators.required]
    })

    this.activateRouter.params.subscribe(resp=>{
      let id= resp['id'];
      if(id){
        this.projectService.getProjectById(id).subscribe(acProj=>{
          this.project = acProj;
          this.projectForm.patchValue({
            id:acProj.id,
            name:acProj.name,
            image:acProj.image,
            description:acProj.description,
            ryear:acProj.ryear,
            site:acProj.site
          })
        })
      }
    })

  }


  updateProject(){
    this.projectService.updateProject(this.id, this.projectForm.value).subscribe(data=>{
      //console.log(data);
      this.router.navigate(['/portfolio']);
      swal('Proyecto actualizado',`El proyecto ha sido actualizado con exito`,`success`);
    })
  }

}
