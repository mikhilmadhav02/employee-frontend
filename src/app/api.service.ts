import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  sign= new BehaviorSubject('')
base="http://localhost:3000"

  constructor(private api:HttpClient) { 
    this.signinvalue() }

// admin page all employee call
click(username:any,password:any){
const body={username,password}
console.log(`username==${body.username}password==${body.password}`);
return this.api.post(`${this.base}/login`,body)
}

// sign in sign out change function
signinvalue(){
var rv:any = localStorage.getItem("username")
this.sign.next(rv)
}

// create employee
create(body:any){
  console.log('employee===',body);
   return this.api.post(`${this.base}/createmploye`,body)
}

// update employee details
 updatemploye(body:any){
    return this.api.post(`${this.base}/updatemploye`,body)
   }


// delete employe
delete(id:any){
  console.log('delete id ===',id);
  return this.api.delete(`${this.base}/delete/${id}`)
}

// review push call
reviewcall(body:any){
  return this.api.post(`${this.base}/reviewcall`,body)
}

}
