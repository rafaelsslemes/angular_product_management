import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-produc-update',
  templateUrl: './produc-update.component.html',
  styleUrls: ['./produc-update.component.css']
})
export class ProducUpdateComponent implements OnInit{
  
  product!: Product;

  constructor (private productService : ProductService, 
               private router : Router,
               private route : ActivatedRoute){}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get("id");
      this.productService.readById(id!).subscribe(product => {
        this.product = product;
      });
  }

  updateProduct(){
    this.productService.update(this.product).subscribe(()=>{
      this.productService.showMessage("Product Updated!");
      this.router.navigate(["/products"]);
    });
  }
  
  cancel(){
    this.router.navigate(["/products"]);
  }

}
