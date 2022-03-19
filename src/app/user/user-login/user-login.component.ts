import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertyfyService } from 'src/app/service/alertyfy.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authservice : AuthService, private alertify : AlertyfyService, private router : Router) { }

  ngOnInit() {
  }

  onLogin(loginForm : NgForm) {
    console.log(loginForm.value);
    const token = this.authservice.authUser(loginForm.value);

    if (token) {
      localStorage.setItem("token", token.userName)
      this.alertify.success("Login Successful");
      this.router.navigate(['/']);

    } else {
      console.log('Login not Successful');
      this.alertify.error("Login unsuccessful, please provide correct login in details")
    }
  }
}
