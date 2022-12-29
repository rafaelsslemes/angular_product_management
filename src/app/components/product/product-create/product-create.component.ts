import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // Receiving in contructor invokes Angular to Inject an instance by DI
  constructor(private productService : ProductService, private router : Router){}

  ngOnInit(): void {
      
  }

  product: Product = {
    name: "Test Product",
    price: 150
  }
  
  createProduct(){

    // Get an observable and run commands when it receives a conclusion event 
    this.productService.create(this.product).subscribe(()=>{
      
      this.productService.showMessage("Product created");
      this.router.navigate(["/products"]);
    });
  }

  cancel(){
    this.router.navigate(["/products"]);
  }
  
}
