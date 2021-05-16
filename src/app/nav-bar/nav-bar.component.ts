import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.modal';
import { AuthService } from 'src/shared/services/auth.service';
import { FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user:User

  searchForm = new FormGroup({
    search:new FormControl(''),
    
  });

  constructor(private authService:AuthService ) {
     
   }

  ngOnInit() {
    
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))
    }else{
      this.authService.getUserLogin().subscribe(message=>{
        console.log(message)
        this.user = message.user
      })
    }
    

   
    
    
  }
  onLogout(){
    
    this.authService.logoutUser()
    location.reload()
  }

  onSearch(){
    alert('wiiou')
  }
}
