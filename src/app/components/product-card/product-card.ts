import { Component, Input } from '@angular/core';
import { Product } from '../../models/mockdata';
import { StarRating } from '../star-rating/star-rating';
import { CommonModule } from '@angular/common';
import { CurrencyFormatterPipe } from '../../pipes/currency-formatter.pipe';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';

@Component({
  selector: 'app-product-card',
  standalone:true,
  imports: [StarRating,CommonModule, CurrencyFormatterPipe, TimeAgoPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;
  updateRating(value: number) {
    this.product.rating = value;
  }
}
