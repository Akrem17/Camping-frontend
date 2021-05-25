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
    Images:new FormControl(['']),
  })
  constructor() { }

  ngOnInit() {
  }

  
  onSubmit(){
    
    console.log(this.createTourForm.value)
  }
}
