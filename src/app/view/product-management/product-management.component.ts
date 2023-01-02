import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent {

  constructor(private router : Router, private headerService : HeaderService){
    this.headerService.headerData = {
      title: "Product Management",
      icon: "storefront",
      routeUrl: "/products"
    }
  }

  navigateToProductCreate() {
    this.router.navigate(['/products/create']);
  }
}
