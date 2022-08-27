import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import  swal  from 'sweetalert2';

import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit {

  educationForm: FormGroup;  
  education:Education;
  id:number;

  constructor(private educationService:EducationService,
              private fb:FormBuilder,
              private activateRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params['id'];

    this.educationForm = this.fb.group({
      id:[0],
      school:['',Validators.required],
      title:['',Validators.required],
      logo:['',Validators.required],
      description:['',Validators.required],
      site:['',Validators.required],
      start_year:['',Validators.required],
      ending_year:['',Validators.required]
    })

    this.activateRouter.params.subscribe(resp=>{
      let id= resp['id'];
      if(id){
        this.educationService.getEducationById(id).subscribe(acEduc=>{
          this.education = acEduc;
          this.educationForm.patchValue({
            id:acEduc.id,
            school:acEduc.school,
            title:acEduc.title,
            logo:acEduc.logo,
            description:acEduc.description,
            site:acEduc.site,
            start_year:acEduc.start_year,
            ending_year:acEduc.ending_year
          })
        })
      }
    })


  }

  
  updateEducation(){
    this.educationService.updateEducation(this.id, this.educationForm.value).subscribe(data=>{
      //console.log(data);
      this.router.navigate(['/portfolio']);
      swal('Educación actualizada',`La instancia educativa ha sido actualizada con exito`,`success`); 
    })
  }


}
