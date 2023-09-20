import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent {

eform=this.data.group({
  id:['',[Validators.required]],
  username:['',[Validators.required]],
  password:['',[Validators.required]],
  image:['',[Validators.required]],
  position:['',[Validators.required]],
  mobile:['',[Validators.required]],
  email:['',[Validators.required]],
  address:['',[Validators.required]],
  name:['',[Validators.required]]
})


  constructor(private data:FormBuilder,private api:ApiService){}

createmploye(){
  if(this.eform.valid){
    const user=localStorage.getItem("username")
    const pass=localStorage.getItem("password")
    const body={
      user,pass,
       id:this.eform.value.id,
     name:this.eform.value.name,
     image:this.eform.value.image,
    position:this.eform.value.position,
     username:this.eform.value.username,
     password:this.eform.value.password,
     mobile:this.eform.value.mobile,
     email:this.eform.value.email,
     address:this.eform.value.address,
    }
        this.api.create(body).subscribe({next:(res:any)=>{
          this.eform.reset()
               alert('Employee Profile created')

        },error:(err:any)=>{
         alert('error in server side')
        }})

  }else{
    alert('please fill the form')
  }
}


}
