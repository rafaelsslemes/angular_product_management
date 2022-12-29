import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent {

  constructor(private router : Router){}

  navigateToProductCreate() {
    this.router.navigate(['/products/create']);
  }
}
