import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  title: string;
  myArray: string[];
  users: string; 

  constructor(private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) { 
    }

  ngOnInit() {
    this.title = "";
    this.myArray = ["alma", "narancs", "korte"]; 
    if(localStorage.getItem('user') === 'admin') {
      this.queryAllUsers();
    }
  }

  queryAllUsers() {
    this.loginService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(["/login", {message: "Logout successful"}]);
  }

  buyFruit(fruit: string) {
    console.log("Vettem egy " + fruit + "-t");
  }

  addFruit(fruit: string) {
    this.myArray.push(fruit);
  }

}
