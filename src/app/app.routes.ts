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
    component: CreateComponent
  }
];
