import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  productsService = inject(ProductsService)

  matSnackBar = inject(MatSnackBar)
  route = inject(Router)

  product: Product = inject(ActivatedRoute).snapshot.data['product']

  onSubmit(product: Product) {
    this.productsService.put(this.product.id, product).subscribe(() => {
      this.matSnackBar.open('Produto editado com sucesso!', 'OK')

      this.route.navigateByUrl('/');
    })
  }
}
