import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private backendUrl = "http://localhost:3001/products";

  // Receiving in contructor invokes Angular to Inject an instance by DI
  constructor(private snackBar : MatSnackBar, private http : HttpClient) { }

  showMessage(msg : string){
    this.snackBar.open(msg, '', 
      {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
  }

  create (product : Product) : Observable<Product>{
    return this.http.post<Product>(this.backendUrl, product);
  }
}
