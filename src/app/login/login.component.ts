import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  n:number=20;
name:string="nirmaan";
salary:number=50000;
rateofinterest:number=0.25;
today=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
