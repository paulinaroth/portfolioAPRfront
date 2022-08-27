import { Component, OnInit } from '@angular/core';
import  swal  from 'sweetalert2';
import { Router } from '@angular/router';

import { PersonService } from 'src/app/services/person.service';
import { SkillService } from 'src/app/services/skill.service';
import { Person } from 'src/app/models/person';
import { Skill } from 'src/app/models/skill';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  person:Person={id: 0, name: '', title: '', about: '', profileimg: '', email: '', province: {id: 0, name: ''}, location: {id: 0, provinceId: 0, name: ''}};
  skill:Skill;
  skills:Skill[];
  loggedUser = this.authService.getLoggedUser();

  constructor(private personService:PersonService,
              private skillService:SkillService,
              private router: Router,
              private authService:AuthService) { }

  ngOnInit(): void {
    

    this.personService.getPerson().subscribe(
      resp=>{this.person=resp;
        //console.log("El id de la persona es " + this.person.id);
        this.skillService.getSkillByPerson(this.person.id).subscribe(
          resp=>{this.skills=resp;
          //console.log(resp);
        })
      }
    );

  }

  delete(id:number){
    swal({
      title: '¿Estás seguro?',
      text: "Confirmar si se desea eliminar",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.skillService.deleteSkill(id).subscribe(data => {
          console.log(data);
          this.router.navigate(['/portfolio']).then(() => {
            window.location.reload();
          });
          swal(
            
            'Eliminación completada!',
            'El registro ya no se encuentra en la base de datos.'
          )
        })
      }
    })
  }

}
