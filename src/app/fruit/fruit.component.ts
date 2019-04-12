import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  title: String;
  myArray: String[];
  user: String; 

  constructor(private route: ActivatedRoute,
    private router: Router) { 
    }

  ngOnInit() {
    this.title = "";
    this.myArray = ["alma", "narancs", "korte"]; 
  }

  buyFruit(fruit: String) {
    console.log("Vettem egy " + fruit + "-t");
  }

  addFruit(fruit: String) {
    this.myArray.push(fruit);
  }

}
