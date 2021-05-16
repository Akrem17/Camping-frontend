import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { AuthService } from 'src/shared/services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm = new FormGroup({
    name:new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.signupUser(
      this.registerForm.value.name,
      this.registerForm.value.email,
      this.registerForm.value.password)



  }

}
