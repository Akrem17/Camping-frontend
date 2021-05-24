import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tour } from 'src/models/tour.modal';
import { TourService } from 'src/shared/services/tour.service';

@Component({
  selector: 'app-tours-over-view',
  templateUrl: './tours-over-view.component.html',
  styleUrls: ['./tours-over-view.component.css']
})
export class ToursOverViewComponent implements OnInit {
  tours:Tour[]= []
  constructor(private tourService:TourService,private route:ActivatedRoute) { }

  ngOnInit() {
   
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
          
        })
      }
      
    })
  
  }


}
