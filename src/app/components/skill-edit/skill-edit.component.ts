import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/app/models/skill';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-skill-edit',
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.css']
})
export class SkillEditComponent implements OnInit {

  skillForm: FormGroup;  
  person:Person={id: 0, name: '', title: '', about: '', profileimg: '', email: '', province: {id: 0, name: ''}, location: {id: 0, provinceId: 0, name: ''}};
  skill:Skill;
  id:number;

  constructor(private skillService:SkillService,
              private fb:FormBuilder,
              private activateRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.id = this.activateRouter.snapshot.params['id'];

    this.skillForm = this.fb.group({
      id:[0],
      name:['',Validators.required],
      icon:['',Validators.required]
    })

    this.activateRouter.params.subscribe(resp=>{
      let id= resp['id'];
      if(id){
        this.skillService.getSkillById(id).subscribe(acSk=>{
          this.skill = acSk;
          this.skillForm.patchValue({
            id:acSk.id,
            name:acSk.name,
            icon:acSk.icon
          })
        })
      }
    })
  }


  updateSkill(){
    this.skillService.updateSkill(this.id, this.skillForm.value).subscribe(data=>{
      //console.log(data);
      this.router.navigate(['/portfolio']);
      swal('Habilidad actualizada',`La habilidad ha sido actualizada con exito`,`success`);
    })
  }

}
