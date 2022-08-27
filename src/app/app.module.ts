import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire/compat';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CommonModule } from '@angular/common';
import { EducationAddComponent } from './components/education-add/education-add.component';
import { EducationEditComponent } from './components/education-edit/education-edit.component';
import { SkillAddComponent } from './components/skill-add/skill-add.component';
import { SkillEditComponent } from './components/skill-edit/skill-edit.component';
import { ProjectAddComponent } from './components/project-add/project-add.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    PortfolioComponent,
    PersonEditComponent,
    EducationAddComponent,
    EducationEditComponent,
    SkillAddComponent,
    SkillEditComponent,
    ProjectAddComponent,
    ProjectEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
