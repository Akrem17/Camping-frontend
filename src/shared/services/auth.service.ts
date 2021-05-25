import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.modal';
import { environment} from '../../environments/environment'


import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token:string;
  private user:User;
  private subject = new Subject<any>();
  constructor(private http :HttpClient,private route:Router) { }


  sendMessage(user: User) {
    this.subject.next({  user });
}

clearMessages() {
    this.subject.next();
}

userLogin(): Observable<any> {
    return this.subject.asObservable();
}


  loginUser(email:string,password:string){
    const authData = {email:email,password:password};
    this.http.post<{user:User,token:string}>(`${environment.url}/user/login`,authData).subscribe(res =>{
      console.log(res)
      this.token = res.token;
      this.user = res.user
      localStorage.setItem('user',JSON.stringify(this.user));
      localStorage.setItem('token',res.token)
      this.sendMessage(this.user)
      this.route.navigate(['tours'])
    })
  }

  signupUser(name:string,email:string,password:string){
    const registerData = {
      name:name,
      email:email,
      password:password
    }
    this.http.post<{user:User,token:string}>(`${environment.url}/user/register`,registerData).subscribe(res =>{
      
      this.token = res.token;
      this.user = res.user
     
      localStorage.setItem('user',JSON.stringify(this.user));
      localStorage.setItem('token',res.token)
      this.sendMessage(this.user)
      this.route.navigate(['tours'])
    })
  }
  getUserLogin(): Observable<any> {
    return this.subject.asObservable();
}
  logoutUser(){
    this.token = null;
    this.user = null;
    localStorage.removeItem('user')
    
  }
  getToken(){
    
      return localStorage.getItem('token')
    
    
  }
  
}
