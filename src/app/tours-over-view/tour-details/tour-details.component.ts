import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.modal';
import { TourService } from 'src/shared/services/tour.service';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {
  tour = {}
  user:User
  constructor(private activatedRoute:ActivatedRoute,private toursService:TourService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.toursService.getTour(id).subscribe(data=>{
      this.tour = data
      console.log(data)
    })
  }

}
