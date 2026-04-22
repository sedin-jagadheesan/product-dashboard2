import { CommonModule } from '@angular/common';
import { Component, EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})
export class StarRating {
  @Input() rating :number =0;
  @Output() ratingChange = new EventEmitter<number>();
  stars=[1,2,3,4,5]
  rate(value:number){
    this.ratingChange.emit(value);
  }
}
