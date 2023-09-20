import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

svalue:any=''


  constructor(private api:ApiService , private nav:Router){}

ngOnInit(): void {
  this.api.sign.subscribe({next:(res:any)=>{
    this.svalue=res
    console.log('signin value====',res);
    
  }})
}

signout(){
  localStorage.removeItem("username")
  localStorage.removeItem("password")
 this.nav.navigateByUrl('/')
  this.api.signinvalue()
}


}
