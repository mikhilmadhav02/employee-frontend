import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employe-page',
  templateUrl: './employe-page.component.html',
  styleUrls: ['./employe-page.component.css']
})
export class EmployePageComponent implements OnInit{
formreview=this.form.group({
  one:[''],
  two:[''],
three:[''],
four:['']
})

allemployee:any=[]
review:boolean=false
constructor(private api:ApiService,private form:FormBuilder ){}

ngOnInit(): void {
  const username=localStorage.getItem("username")
  const password=localStorage.getItem("password")
  console.log(`all employee username==${username}password==${password}`);
  this.api.click(username,password).subscribe({next:(res:any)=>{
    this.allemployee=res.employees
    console.log(this.allemployee);
    },error:(err:any)=>{
    alert('error')
  }})
}



  

}
