import {Component, Input, OnInit} from '@angular/core';
import {Review} from '../../../model/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input()
  public review: Review;

  constructor() { }

  ngOnInit(): void {
  }

}
