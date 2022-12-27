import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ProductManagementComponent } from './view/product-management/product-management.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent},
  {
    path: "products",
    component: ProductManagementComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
