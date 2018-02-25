import { Component } from '@angular/core';


import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result:Array<any>
  name:string

  constructor(private dataService:DataService){
      this.onLoad()
  }
  onAdd(){
    
    this.dataService.addData(this.name).subscribe(res=>{
      console.log(this.name)
      console.log(res)
      this.onLoad()
    })
  }
  onDel(data){
    this.dataService.delData(data._id).subscribe(res=>{      
      console.log(res)
      this.onLoad()
    })
  }

  onLoad(){
    this.dataService.getData().subscribe(res=>{
      this.result = res
    })
  }
}
