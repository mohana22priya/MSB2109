import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  m:string="mohana";
 n:number=100;
  digits:number[]=[10,20,30,40,50];

 status:boolean=true;
 
 changeStatus()
 {
   this.status=!this.status;
 }
  constructor() { }

  ngOnInit(): void {
  }

}
