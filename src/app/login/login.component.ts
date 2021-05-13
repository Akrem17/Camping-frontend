import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/services/auth.service';
import { FormGroup, FormControl} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }


  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  
  ngOnInit() {
  }

  onSubmit(){
    
    this.authService.loginUser(this.loginForm.value.email,this.loginForm.value.password);
  }
}
