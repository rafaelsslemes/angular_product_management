import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducUpdateComponent } from './components/product/produc-update/produc-update.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { HomeComponent } from './view/home/home.component';
import { ProductManagementComponent } from './view/product-management/product-management.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent },
  {
    path: "products",
    component: ProductManagementComponent },
  {
    path: "products/create",
    component: ProductCreateComponent },
  {
    path: "products/update/:id",
    component: ProducUpdateComponent },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
