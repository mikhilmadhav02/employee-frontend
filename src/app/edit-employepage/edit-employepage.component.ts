import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-employepage',
  templateUrl: './edit-employepage.component.html',
  styleUrls: ['./edit-employepage.component.css']
})
export class EditEmployepageComponent implements OnInit {
result:any=[]
v:any=''
editform= this.data.group({
  name:['',[Validators.required]],
  image:['',[Validators.required]],
  position:['',[Validators.required]],
  address:['',[Validators.required]],
  mobile:['',[Validators.required]],
  email:['',[Validators.required]],
  username:['',[Validators.required]],
  password:['',[Validators.required]]
})

  constructor(private route:ActivatedRoute, private api:ApiService , private nav:Router , private data:FormBuilder){}

 
ngOnInit(): void {
   this.route.params.subscribe({next:(res:any)=>{
   console.log('res===',res);
   this.v=res.id
    }})
  const username=localStorage.getItem("username")
  const password = localStorage.getItem("password")
  this.api.click(username,password).subscribe({next:(res:any)=>{
const t =res.employees
t.forEach((item:any)=>{
  if(item.id==this.v){
    this.result.push(item)
  }else{
     }
})
// value assign

this.editform.value.image=this.result[0].image
this.editform.value.name=this.result[0].name
this.editform.value.position=this.result[0].position
this.editform.value.mobile=this.result[0].mobile
this.editform.value.email=this.result[0].email
this.editform.value.address=this.result[0].address
this.editform.value.username=this.result[0].username
this.editform.value.password=this.result[0].password

console.log('result1====',this.editform.value.name);
 },error:(err:any)=>{
    }})
  }


  // edit employe and update
  editemploye(){
    const user=localStorage.getItem("username")
    const pass = localStorage.getItem("password")
      const body={
        user,pass,
        id:this.v,
        name:this.editform.value.name,
        image:this.editform.value.image,
        position:this.editform.value.position,
        username:this.editform.value.username,
        password:this.editform.value.password,
        mobile:this.editform.value.mobile,
        email:this.editform.value.email,
        address:this.editform.value.address
      }
           console.log('body=====',body);
           
   this.api.updatemploye(body).subscribe({next:(res:any)=>{
         alert('updated succesfully')
   },error:(err:any)=>{

   }})

  }


}
