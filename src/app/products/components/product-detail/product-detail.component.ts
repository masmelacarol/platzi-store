import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '@core/models/product/product.model';
import { ProductsService } from '@core/services/products/products.service';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.product$ = this.route.params.pipe(
      switchMap((params: Params) =>
        this.productsService.getProductById(params.id)
      )
    );
  }

  createProduct() {
    const newProduct: Product = {
      id: '21',
      image: 'assets/images/hoodie.png',
      title: 'Hola mundo cruel',
      price: 100000,
      description: 'camiseta de hola mundo cruel',
    };
    this.productsService.createProduct(newProduct).subscribe((product) => {
      console.log(
        'ProductDetailComponent -> createProduct -> product',
        product
      );
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      title: 'Hola mundo platxi',
      price: 10000,
      description: 'camiseta de hola mundo platxi',
    };
    this.productsService.updateProduct('1', updateProduct).subscribe(
      (product) => {
        console.log(
          'ProductDetailComponent -> updateProduct -> product',
          product
        );
      },
      (error) =>
        console.log('ProductDetailComponent -> updateProduct -> error', error)
    );
  }

  deleteProduct() {
    this.productsService.deleteProduct('21').subscribe((product) => {
      console.log(
        'ProductDetailComponent -> deleteProduct -> product',
        product
      );
    });
  }

  getRandomUser() {
    this.productsService.getRandomUsers().subscribe(
      (users) => console.log(users),
      (error) => console.error(error)
    );
  }

  getFile() {
    this.productsService.getFile().subscribe((content) => {
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, 'file.txt');
      console.log('ProductDetailComponent -> getFile -> content', content);
    });
  }
}
