import { Component, Input, OnInit } from '@angular/core';
import { Tour } from 'src/models/tour.modal';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css']
})
export class TourCardComponent implements OnInit {
  @Input() tour:Tour
  constructor() { }

  ngOnInit() {
  }

}
