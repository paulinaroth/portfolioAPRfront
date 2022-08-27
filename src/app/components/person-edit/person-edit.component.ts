import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { ProvincesService } from 'src/app/services/provinces.service';
import { LocalitiesService } from 'src/app/services/localities.service';
import { ActivatedRoute, Router } from '@angular/router';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  personForm: FormGroup;  
  person:Person;
  provinces:any=[];
  localities:any=[];

  constructor(private personService:PersonService,
              private fb:FormBuilder,
              private activateRouter: ActivatedRoute,
              private router: Router,
              private provinceService:ProvincesService,
              private localitiesService:LocalitiesService) { }

  ngOnInit(): void {

    this.personForm = this.fb.group({
        id:[''],
        name:['',Validators.required],
        title:['',Validators.required],
        about:['',Validators.required],
        profileimg:['',Validators.required],
        email:['',[Validators.required, Validators.email]],
        province:['', Validators.required],
        location:['',Validators.required],

    });;

    this.activateRouter.params.subscribe(
      resp=>{
        let id= resp['id'];
        //console.log("el id es " + id);
        if(id){
          this.personService.getPerson().subscribe(ac=>{
              this.person = ac;
              this.personForm.patchValue({
                id:ac.id,
                name:ac.name,
                title:ac.title,
                about:ac.about,
                profileimg:ac.profileimg,
                email:ac.email,
                
              })
              console.log(ac);
            }
          )
        }
      }
    )

   
    this.provinceService.getAllProvinces().subscribe(resp=>{
      this.provinces=resp;
    });

    this.personForm.get('province')?.valueChanges.subscribe(value=>{
      this.localitiesService.getAllLocalitiesByProvince(value.id).subscribe(resp=>{
        this.localities=resp;
        
      })
    });

    
  }

  

  update():void{
    let id:any= this.activateRouter.snapshot.params['id'];
    const personNew=this.personForm.value;
    /*console.log(personNew);*/
    this.personService.editPerson(id, personNew ).subscribe((resp:Person)=>{
      console.log(resp);
      this.router.navigate(['/portfolio']); 
      swal('Perfil actualizado',`El perfil de ${this.person.name} ha sido actualizado con exito`,`success`);           
    })    
  }

}
