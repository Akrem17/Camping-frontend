import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.css']
})
export class AddTourComponent implements OnInit {
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
  })
  constructor() { }

  ngOnInit() {
  }

  
  onSubmit(){
    
    this.createTourForm.value.imageCover = "tour-5-cover.jpg"
    this.createTourForm.value.images = ["tour-5-1.jpg","tour-5-2.jpg","tour-5-3.jpg"]
    console.log(this.createTourForm.value)
  }
}
