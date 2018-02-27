import { Injectable } from '@angular/core';

import { Http } from "@angular/http";
import "rxjs/add/operator/map";
@Injectable()
export class DataService {

  constructor(private http:Http) { }

  getData(){
    return this.http.get('/api/show').map(res=>res.json())
  }
  addData(input){
    return this.http.post('/api/add',input).map(res=>res.json())
  }
  editData(input){
    return this.http.put('/api/edit/'+input._id,input).map(res=>res)
  }
  delData(input){
    return this.http.delete('/api/delete/'+input).map(res=>res)
  }
  getDataByID(input){
    return this.http.get('/api/get/'+input).map(res=>res.json())
  }
}
