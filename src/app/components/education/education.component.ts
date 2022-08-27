import { Component, OnInit } from '@angular/core';
import  swal  from 'sweetalert2';
import { Router } from '@angular/router';

import { PersonService } from 'src/app/services/person.service';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/models/education';
import { Person } from 'src/app/models/person';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education:Education;
  person:Person={id: 0, name: '', title: '', about: '', profileimg: '', email: '', province: {id: 0, name: ''}, location: {id: 0, provinceId: 0, name: ''}};
  educations:any=[];
  loggedUser = this.authService.getLoggedUser();
  
  constructor(private personService:PersonService,
              private educationService:EducationService,
              private router: Router,
              private authService:AuthService) { }

  ngOnInit(): void {
    
    this.personService.getPerson().subscribe(
      resp=>{this.person=resp;
        //console.log("El id de la persona es " + this.person.id);
        this.educationService.getEducationByPerson(this.person.id).subscribe(
          resp=>{this.educations=resp;
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
        this.educationService.deleteEducation(id).subscribe(data => {
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


