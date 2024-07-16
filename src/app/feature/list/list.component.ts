import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router'

import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card/card.component';

import { MatButtonModule } from '@angular/material/button'
import { MatDialog } from '@angular/material/dialog'
import { filter } from 'rxjs';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';

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
  router = inject(Router)

  confirmationDialogServices = inject(ConfirmationDialogService)

  ngOnInit() {
    this.productsService.getAll().subscribe((data) => {
      this.products = data
    })
  }

  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id]);
  }

  onDelete(product: Product) {
    this.confirmationDialogServices.openDialog()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this.productsService.delete(product.id).subscribe(() => {
          this.productsService.getAll().subscribe((data) => {
            this.products = data
          })
        })
      })
  }
}
