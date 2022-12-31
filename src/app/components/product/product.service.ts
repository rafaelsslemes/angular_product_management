import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private backendUrl = "http://localhost:3001/products";

  // Receiving in contructor invokes Angular to Inject an instance by DI
  constructor(private snackBar : MatSnackBar, private http : HttpClient) { }

  showMessage(msg : string, isError : boolean = false){
    this.snackBar.open(msg, '', 
      {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: isError ? ['msg-error'] : ['msg-success']
      });
  }

  create (product : Product) : Observable<Product>{
    return this.http.post<Product>(this.backendUrl, product).pipe<Product, Product>
    (
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)
    ));
  }

  errorHandler(e: any): Observable<never> {
    console.log(e);
    this.showMessage("An error ocurried", true);
    return EMPTY;
  }

  read () : Observable<Product[]> {
    return this.http.get<Product[]>(this.backendUrl);
  }

  readById (id : string) : Observable<Product> {
    // Concat Syntax requires `` - Crasis/Crase
    const url = `${this.backendUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  update (product : Product) : Observable<Product> {
    const url = `${this.backendUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  delete(id : string) : Observable<Product> {
    const url = `${this.backendUrl}/${id}`;
    return this.http.delete<Product>(url);
  }
}
