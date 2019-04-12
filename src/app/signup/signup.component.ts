import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string;
  password: string

  constructor(private router: Router, 
    private loginService: LoginService) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }

  register() {
    this.loginService.signup(this.username, this.password).subscribe(
      data => {
        this.router.navigate(["/login", {message: data.message}])
      }, error => {
        console.log(error);
        this.router.navigate(["/login", {message: error.error.message}])
      }
    )
  }

  backToLogin() {
    this.router.navigate(["/login"]);
  }

}
