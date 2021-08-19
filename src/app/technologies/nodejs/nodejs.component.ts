import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/image.service';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.css']
})
export class NodejsComponent implements OnInit {

  imagedata:any[]=[];
  constructor(private ims:ImageService) { }

  ngOnInit(): void {
    this.ims.GetImageData().subscribe((result)=>{
      console.log(result['data']);
      this.imagedata=result['data'];

    })
  }

}
