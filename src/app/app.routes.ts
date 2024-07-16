import { Routes } from '@angular/router';

import { ListComponent } from './feature/list/list.component';
import { getProducts } from './shared/resolvers/get-products.resolver';
import { editProduct } from './shared/resolvers/edit-product.resolver';

export const routes: Routes = [
  {
    path: '',
    resolve: {
      products: getProducts
    },
    component: ListComponent
  },
  {
    path: 'create-product',
    loadComponent: () => import('./feature/create/create.component').then(m => m.CreateComponent)
  },
  {
    path: 'edit-product/:id',
    resolve: {
      product: editProduct
    },
    loadComponent: () => import('./feature/edit/edit.component').then(m => m.EditComponent)
  }
];
