import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  Login(obj:NgForm)
  {
     console.log(obj.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
