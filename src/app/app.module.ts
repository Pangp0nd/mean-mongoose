import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { DataService } from "./data.service";
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'editEmp/:id', component: EditEmpComponent} 
];

@NgModule({
  declarations: [
    AppComponent,
    EditEmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  exports: [ RouterModule ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }








