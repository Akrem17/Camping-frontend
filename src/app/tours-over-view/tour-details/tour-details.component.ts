import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user.modal';
import { CommentService } from 'src/shared/comment.service';
import { TourService } from 'src/shared/services/tour.service';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {
  tour = {}
  user:User
  commentForm = new FormGroup({
    comment:new FormControl('')
  })
  constructor(private activatedRoute:ActivatedRoute,private toursService:TourService,
    private router:Router,
    private commentService:CommentService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.toursService.getTour(id).subscribe(data=>{
      this.tour = data
      console.log(data)
    })
  }
  
  onComment(){
    
    //@ts-ignore
    this.commentService.createComment(this.commentForm.value.comment,this.tour.id,this.user._id).subscribe(res=>{
      //@ts-ignore
      this.toursService.getTour(this.tour.id).subscribe(data=>{
        this.tour = data
        console.log(data)
        this.commentForm.reset()
        const id = this.activatedRoute.snapshot.paramMap.get('id')
        this.toursService.getTour(id).subscribe(data=>{
          this.tour = data
          console.log(data)
        })
      })
      
    },err=>{
      console.log(err)
    })
  }
}
