import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/fetch-data.service';
import { Picture } from 'src/app/interface/picture';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:Picture[]=[{url:"",name:"",uuid:""}]

  picIndex:number=0;
  constructor(private _fetchData:FetchDataService){}

  ngOnInit(): void {
    this._fetchData.getPictures().subscribe((response)=>
    {
      //console.log(response)
      this.data=response;
      console.log(this.data)
    })
  }
  getPicIndex(indexOfPic:number)
  {
    this.picIndex=indexOfPic;
    console.log(indexOfPic);
  }
  counter(check:boolean)
  {
    if(check)
    {
      if(this.picIndex==this.data.length-1)
      {
        this.picIndex=0;
      }
      else
      {
        this.picIndex++;
      }
      
    }
    else
    {
      if(this.picIndex==0)
      {
        this.picIndex=this.data.length-1
      }
      else
      {
        this.picIndex--;
      }
     
    }
  }

}
