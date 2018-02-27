import { Component, OnInit } from '@angular/core';


import { DataService } from "../data.service";
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  result:Array<any>
  private resultByID : any ={};
  private nameE:string;
  private ageE:number;
  private id:string;

  constructor(private dataService:DataService,private router: Router,private route: ActivatedRoute ){
    
  }
  ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
    this.getByID(this.id)  
  }
  getByID(id){
    this.dataService.getDataByID(id).subscribe(res=>{
      this.resultByID = res
      console.log("## Edit : "+this.id+" ##")
    console.log(this.resultByID)
    console.log("## to ##")    
    })
  }
  onEdit(){
    const data = {
      _id:this.id,
      name:this.resultByID.name,
      age:this.resultByID.age
    }    
    console.log(data)
    this.dataService.editData(data).subscribe(res=>{   
    })    
    this.onCancel()
  }
  onCancel(){
    this.router.navigate([`/`]);
    location.reload();
  }
  
}
