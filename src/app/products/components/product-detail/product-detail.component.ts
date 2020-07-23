import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '@core/models/product/product.model';
import { ProductsService } from '@core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
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
    this.productsService
      .updateProduct('1', updateProduct)
      .subscribe((product) => {
        console.log(
          'ProductDetailComponent -> updateProduct -> product',
          product
        );
      });
  }

  deleteProduct() {
    this.productsService.deleteProduct('21').subscribe((product) => {
      console.log(
        'ProductDetailComponent -> deleteProduct -> product',
        product
      );
    });
  }
}
