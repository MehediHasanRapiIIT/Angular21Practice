import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

loginObj: LoginModel = new LoginModel();

router = inject(Router);

http = inject(HttpClient);

  onLogin() {
    this.http.post("https://api.freeprojectapi.com/api/UserApp/login", this.loginObj).subscribe({
      next:(result:any)=>{
        alert("Login successful");
        localStorage.setItem("loggedUserId", result.data.userId);
        this.router.navigateByUrl("/batch");
      },
      error:(error:any)=>{
        alert(error.error.message);
      }
    })
  }

}


class LoginModel {
  emailId: string;
  password: string;

  constructor(){
    this.emailId = '';
    this.password = '';
  }
}