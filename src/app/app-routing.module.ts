import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerComponent } from './customer/customer.component';
import { DetailComponent } from './detail/detail.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
    {path: 'products/detail/:id',component: DetailComponent},
  {path: '',component: ProductComponent},
  {path:'customer/management/',component:CustomerComponent},
  {path: 'customer/detail/:id',component: CustomerDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

