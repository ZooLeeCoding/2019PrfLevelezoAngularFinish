import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.username = "";
    this.password = "";
    this.route.params.subscribe(params => {
      console.log(params);
      this.message = params['message'] ? params['message'] : '';
    })
  }

  login() {
    this.loginService.login(this.username, this.password).subscribe((data: any) => {
      console.log(data);
      localStorage.setItem("user", this.username);
      this.router.navigate(["/fruit"]);
    })
  }

  navigateToSignup() {
    this.router.navigate(["/signup"]);
  }

}
