import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product-create/product-create.component';
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
    component: ProductCreateComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
