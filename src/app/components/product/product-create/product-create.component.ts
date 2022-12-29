import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // Receiving in contructor invokes Angular to Inject an instance by DI
  constructor(private productService : ProductService){}

  ngOnInit(): void {
      
  }

  createProduct(){
    this.productService.showMessage("Product created");
  }
  
}
