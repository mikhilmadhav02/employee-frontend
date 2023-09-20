import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
employee=this.data.group({
  username:['',[Validators.required]],
  password:['',[Validators.required]]
})
words:boolean=true
b:any=''
constructor(private data:FormBuilder, private api:ApiService, private nav:Router){}

click(){
  if(this.employee.valid){
 const user:any= this.employee.value.username
     const pass:any = this.employee.value.password

     
      const username='mikhil'
      const password=1000
      this.api.click(username,password).subscribe({next:(res:any)=>{
        
        const v = res.employees
        v.forEach((item:any)=>{
          if(item.username==user && item.password==pass){
                       this.b=5
          }else{
            }
        })
            if(this.b==5){
                  console.log('user========',user);
                  localStorage.setItem("employeusername",user)
              localStorage.setItem("employepassword",pass)
              
              localStorage.setItem("username",'mikhil')
              localStorage.setItem("password",'1000')
              alert('login succesfull')
              this.api.signinvalue()
              this.nav.navigateByUrl('/emallpage')
            }else{
              this.words=false
              setTimeout(() => {
                this.words=true
                this.employee.reset()
              }, 3500);
            }

      },error:(err:any)=>{
        alert('error')
      }})
  }
}


}
