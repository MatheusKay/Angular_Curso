import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router'

import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card/card.component';

import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products: Product[] = [];

  productsService = inject(ProductsService)

  ngOnInit() {
    this.productsService.getAll().subscribe((data) => {
      this.products = data
    })
  }
}
