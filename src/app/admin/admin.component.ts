import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  login = this.data.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]]
  })
  words:boolean=true
  constructor(private data:FormBuilder , private api:ApiService, private nav:Router){}
// login
click(){
  if(this.login.valid){
    
    var username:any = this.login.value.username
    var password:any = this.login.value.password
     this.api.click(username,password).subscribe({next:(res:any)=>{
    if(res){
     localStorage.setItem("username",'mikhil')
     localStorage.setItem("password",'1000')
      alert('login succesfull')
      console.log(res);
      this.api.signinvalue()
      this.nav.navigateByUrl('/adallpage')
}else{
  this.words=false
  setTimeout(() => {
    this.words=true
    this.login.reset()
  }, 3500);
}

     },error:(err:any)=>{
      alert('error in server side')
     }})
  }
   
    
   
}

}
