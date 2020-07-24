import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@core/models/product/product.model';
import { environment } from '@environments/environment';
import * as Sentry from '@sentry/browser';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
interface User {
  email: string;
  phone: number;
}
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(environment.url_api)
      .pipe(catchError(this.handleError));
  }

  getProductById(id: string): Observable<Product> {
    return this.http
      .get<Product>(`${environment.url_api}/${id}`)
      .pipe(catchError(this.handleError));
  }

  createProduct(product: Product) {
    return this.http
      .post(environment.url_api, product)
      .pipe(catchError(this.handleError));
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http
      .put(`${environment.url_api}/${id}`, changes)
      .pipe(catchError(this.handleError));
  }
  deleteProduct(id: string) {
    return this.http
      .delete(`${environment.url_api}/${id}`)
      .pipe(catchError(this.handleError));
  }
  getRandomUsers(): Observable<User[]> {
    return this.http.get('https://randomuser.me/api/?results=2').pipe(
      retry(3),
      catchError(this.handleError),
      map((response: any) => response.results as User[])
    );
  }

  getFile() {
    return this.http.get('assets/files/file.txt', { responseType: 'text' });
  }

  private handleError(error: HttpErrorResponse) {
    Sentry.captureException(error);
    return throwError('Ups algo salio mal :"(');
  }
}
