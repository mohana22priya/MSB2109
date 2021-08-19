import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  Details:any[]=[];
  senData(obj:NgForm)
  {
    this.Details.push(obj.value);
       //console.log("full details:",obj.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
