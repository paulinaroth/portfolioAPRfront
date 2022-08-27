import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import  swal  from 'sweetalert2';

import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill-add',
  templateUrl: './skill-add.component.html',
  styleUrls: ['./skill-add.component.css']
})
export class SkillAddComponent implements OnInit {

  skillForm: FormGroup;  
  person:Person={id: 0, name: '', title: '', about: '', profileimg: '', email: '', province: {id: 0, name: ''}, location: {id: 0, provinceId: 0, name: ''}};
  skill:Skill;

  constructor(private personService:PersonService,
              private skillService:SkillService,
              private fb:FormBuilder,
              private activateRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.skillForm = this.fb.group({
      
      name:['',Validators.required],
      icon:['',Validators.required],
    })
  }

  saveSkill(personId:number):void{
    this.personService.getPerson().subscribe(
      resp=>{this.person=resp;
      this.skillService.registerSkill(this.person.id, this.skillForm.value).subscribe(
        nSkill=>{this.skill= nSkill;
          //console.log(nSkill);
          this.router.navigate(['/portfolio']);
          swal('Habilidad agregada',`La nueva habilidad ha sido agregada con exito`,`success`);
        }
      )}   
    )

  }

}
