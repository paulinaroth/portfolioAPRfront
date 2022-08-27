import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={email:'', password:''};
  loginForm: FormGroup; 

  constructor(private authService:AuthService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    })
  }

  logIn(){
    console.log(this.user);
    const {email, password} = this.user;
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).then(res=>{
      console.log("se registró: ", res);
      this.router.navigate(['/portfolio']);
    })
  }

}
