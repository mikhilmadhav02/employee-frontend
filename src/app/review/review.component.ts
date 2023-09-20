import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  formreview=this.form.group({
    one:[''],
    two:[''],
  three:[''],
  four:['']
  })
  
  allemployee:any=[]
  id:any
  constructor(private api:ApiService,private form:FormBuilder ,private route:ActivatedRoute){}

ngOnInit(): void {
  this.route.params.subscribe({next:(res:any)=>{
    const{id}=res
    this.id=id
  }})
}

// sendreview
sendreview(){
  if(this.formreview.valid){
    const username=localStorage.getItem("username")
  const password=localStorage.getItem("password")
  const employeusername=localStorage.getItem("employeusername")
  const employepassword=localStorage.getItem("employepassword")
     const body={
      employeusername,employepassword,
      id:this.id,
      one:this.formreview.value.one,
     two:this.formreview.value.two,
     three:this.formreview.value.three,
     four:this.formreview.value.four,
username,password
     }
    console.log('reviews===',body);

    this.api.reviewcall(body).subscribe({next:(res:any)=>{

    },error:(err:any)=>{

    }})

  }else{
    alert('fill entire form')
  }
   
   

  }






}
