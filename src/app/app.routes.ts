import { Routes } from '@angular/router';

import { ListComponent } from './feature/list/list.component';
import { CreateComponent } from './feature/create/create.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'create-product',
    loadComponent: () => import('./feature/create/create.component').then(m => m.CreateComponent)
  },
  {
    path: 'edit-product',
    loadComponent: () => import('./feature/edit/edit.component').then(m => m.EditComponent)
  }
];
