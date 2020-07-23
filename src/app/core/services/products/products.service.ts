import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@core/models/product/product.model';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.url_api);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.url_api}/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(environment.url_api, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/${id}`, changes);
  }
  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/${id}`);
  }
}
