import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tour } from 'src/models/tour.modal';
import { AuthService } from 'src/shared/services/auth.service';
import { TourService } from 'src/shared/services/tour.service';

@Component({
  selector: 'app-tours-over-view',
  templateUrl: './tours-over-view.component.html',
  styleUrls: ['./tours-over-view.component.css']
})
export class ToursOverViewComponent implements OnInit {
  tours:Tour[]= []
  constructor(private tourService:TourService,private route:ActivatedRoute,private userservice:AuthService) { }

  ngOnInit() {
   /*  var id= JSON.parse(localStorage.getItem('user'))
    
    id=id._id
    var rando=[] 
    this.userservice.getUserById(id).subscribe(res=>{
      //@ts-ignore
      var searchList=res.searchList
      console.log(searchList)
      searchList.forEach(element => {
        console.log(element)
        this.tourService.getTourByName(element).subscribe(res=>{
          console.log(res)
          //@ts-ignore
          if(res.length>0){
            //@ts-ignore
            res.forEach(element => {
              rando.push(element)

            });
          }
        })
       });
       setTimeout(()=>{
        console.log(rando)
        
       },3000)
    })
   

 */
  
    this.route.queryParamMap.subscribe(params=>{
      //@ts-ignore
      if(params.params.startLocation){
         //@ts-ignore
        this.tourService.getTours(params.params.startLocation).subscribe(data=>{
     
          //@ts-ignore
          this.tours = data
          
        })
      }else{
        this.tourService.getTours().subscribe(data=>{
     
          //@ts-ignore
          this.tours = data
          
          console.log(this.tours)
        })
      }
      
    })
  
  }


}
