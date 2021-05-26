import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.modal';
import { AuthService } from 'src/shared/services/auth.service';
import { FormGroup, FormControl} from '@angular/forms'
import { TourService } from 'src/shared/services/tour.service';
import { Router } from '@angular/router';

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

  constructor(private authService:AuthService,private route:Router,private tourservice:TourService ) {
     
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
    var place={place:this.searchForm.value.search};
    this.tourservice.savePlace(place).subscribe(res=>{
      this.route.navigate(['/tours'],
      { queryParams: { startLocation: this.searchForm.value.search}})
    },(err)=>{
      console.log(err)
    })
 

  }
}
