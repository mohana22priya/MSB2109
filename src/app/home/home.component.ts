import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
     test(data:string):void
     {
          console.log("test is called" , data);
     }
    counter:number=1;
     inc()
     {
        this.counter++;
     }




  n:number=100;
  name:string="NIRMAAN";
  imgurl:string="https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8-320-80.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
