import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.Test1CategoryModule),
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.Test1ProductModule),
      },
      {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.Test1CustomerModule),
      },
      {
        path: 'address',
        loadChildren: () => import('./address/address.module').then(m => m.Test1AddressModule),
      },
      {
        path: 'wish-list',
        loadChildren: () => import('./wish-list/wish-list.module').then(m => m.Test1WishListModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class Test1EntityModule {}
