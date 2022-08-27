import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {canActivate, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { EducationAddComponent } from './components/education-add/education-add.component';
import { EducationEditComponent } from './components/education-edit/education-edit.component';
import { SkillAddComponent } from './components/skill-add/skill-add.component';
import { SkillEditComponent } from './components/skill-edit/skill-edit.component';
import { ProjectAddComponent } from './components/project-add/project-add.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes=[
  {path:'', redirectTo:'portfolio', pathMatch:'full'},

  {path:'login', component:LoginComponent},
  
  {path:'portfolio', component:PortfolioComponent},

  {path:'person-edit/:id', component:PersonEditComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login']))},

  {path: 'education-add', component:EducationAddComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login']))},
  {path: 'education-edit/:id', component:EducationEditComponent,  ...canActivate(()=>redirectUnauthorizedTo(['/login']))},

  {path:'skill-add', component:SkillAddComponent,  ...canActivate(()=>redirectUnauthorizedTo(['/login']))},
  {path:'skill-edit/:id', component:SkillEditComponent,  ...canActivate(()=>redirectUnauthorizedTo(['/login']))},

  {path:'project-add', component:ProjectAddComponent,  ...canActivate(()=>redirectUnauthorizedTo(['/login']))},
  {path:'project-edit/:id', component:ProjectEditComponent,  ...canActivate(()=>redirectUnauthorizedTo(['/login']))}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
exports: [RouterModule],
})
export class AppRoutingModule { }
