import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-allpage',
  templateUrl: './ad-allpage.component.html',
  styleUrls: ['./ad-allpage.component.css']
})
export class AdAllpageComponent implements OnInit {
allemployee:any=[]
searchkey:any=''
constructor(private api:ApiService , private nav:Router){

}

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


//  delete employee
deletemploye(id:any){
  this.api.delete(id).subscribe({next:(res:any)=>{
    alert('Employee Profile deleted ')
    this.ngOnInit()
  },error:(err:any)=>{
alert('error in server side')
  }})
}


}
