import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/models/tour.modal';
import { TourService } from 'src/shared/services/tour.service';

@Component({
  selector: 'app-tours-over-view',
  templateUrl: './tours-over-view.component.html',
  styleUrls: ['./tours-over-view.component.css']
})
export class ToursOverViewComponent implements OnInit {
  tours:Tour[]= []

  
  
    
  

  
  constructor(private tourService:TourService) { }

  ngOnInit() {
    this.tourService.getTours().subscribe(data=>{
      //@ts-ignore
      this.tours = data
    })

  ngOnInit() {
    console.log( this.tourService.getTours().subscribe(res=>{

      //@ts-ignore
      this.tours=res
    }))
  }
 
}
