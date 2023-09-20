import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemploye',
  templateUrl: './viewemploye.component.html',
  styleUrls: ['./viewemploye.component.css']
})
export class ViewemployeComponent {
 result:any=[]
  v:any=''
  
    constructor(private route:ActivatedRoute, private api:ApiService , private nav:Router){}
  
   
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
   console.log('viewcom====',this.result);
  },error:(err:any)=>{
    alert('error in server side')
      }})
    
  }

}
