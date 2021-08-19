import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {
receivedData:any[]=[];
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.makeAHttpReq().subscribe((res)=>{
      console.log(res);
      this.receivedData=res;
    })
  }

}
