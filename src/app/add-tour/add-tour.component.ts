import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TourService } from 'src/shared/services/tour.service';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.css']
})
export class AddTourComponent implements OnInit {
  @ViewChild('alert',{static:true}) alert
  createTourForm=new FormGroup({
    name:new FormControl(''),
    description:new FormControl(''),
    summary:new FormControl(''),
    duration:new FormControl(''),
    difficulty:new FormControl(''),
    maxGroupSize:new FormControl(''),
    locationDescription:new FormControl(''),
    locationAddress:new FormControl(''),
    startDates:new FormControl(''),
    imageCover:new FormControl(''),
    images:new FormControl(['']),
    price:new FormControl('')
  })
  constructor(private tourService:TourService,private route:Router) { }

  ngOnInit() {
  }

  
  onSubmit(){
    
    this.createTourForm.value.imageCover = "tour-5-cover.jpg"
    this.createTourForm.value.images = ["tour-5-1.jpg","tour-5-2.jpg","tour-5-3.jpg"]
    const tour = {...this.createTourForm.value}
    tour.startLocation = {
      description:this.createTourForm.value.locationDescription,
      address:this.createTourForm.value.locationAddress
    }
    
    this.tourService.createTour(tour).subscribe(res=>{
      this.alert.nativeElement.style = 'display:block'
      setTimeout(()=>{                           //<<<---using ()=> syntax
        this.route.navigate(['/tours'])
   }, 3000);
    })
  }
}


