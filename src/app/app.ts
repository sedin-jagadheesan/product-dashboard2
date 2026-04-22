import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PRODUCTS} from './models/mockdata';
import { ProductCard } from './components/product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCard,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
search = signal('');
  products = signal(PRODUCTS);

  filteredProducts = computed(() =>
    this.products().filter(p =>
      p.name.toLowerCase().includes(this.search().toLowerCase())
    )
  );
}
