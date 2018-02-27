import { Component } from '@angular/core';


import { DataService } from "./data.service";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result:Array<any>
  private name:string;
  private age:number;

  constructor(private dataService:DataService ,private router: Router){
      this.onLoad()
  }
  onAdd(){
    const data = {
      name:this.name,
      age:this.age
    }
    this.dataService.addData(data).subscribe(res=>{
      console.log("## Add ##")
      console.log(data)
      this.onLoad()
    })
  }
  onEdit(input){
    this.router.navigate([`/editEmp/${input._id}`]);
    this.onLoad()
  }
  onDel(data){
    this.dataService.delData(data._id).subscribe(res=>{      
      console.log("## Del ##")
      console.log(data)
      this.onLoad()
    })
  }

  onLoad(){
    this.dataService.getData().subscribe(res=>{
      this.result = res
      //console.log(this.result)
    })
  }
}
