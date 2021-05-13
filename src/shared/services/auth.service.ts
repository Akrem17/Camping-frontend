import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.modal';
import { environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token:string;
  private user:User;
  constructor(private http :HttpClient,private route:Router) { }

  loginUser(email:string,password:string){
    const authData = {email:email,password:password};
    this.http.post<{user:User,token:string}>(`${environment.url}/user/login`,authData).subscribe(res =>{
      this.token = res.token;
      this.user = res.user
      this.route.navigate(['tours'])
    })
  }

  signupUser(){
    const registerData = {}
    this.http.post<{user:User,token:string}>('url',registerData).subscribe(res =>{
      
      this.token = res.token;
      this.user = res.user
      this.route.navigate(['tours'])
    })
  }
 
  getToken(){
    return this.token;
  }

}
