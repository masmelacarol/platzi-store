import { Component, OnInit } from '@angular/core';
import { Product } from '@core/models/product/product.model';
import { ProductsService } from '@core/services/products/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProductById(id).subscribe((product) => {
      // this.product = product;
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

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe((rta) => {
      if (rta) {
        const index = this.products.findIndex((i) => i.id === id);
        this.products.splice(index, 1);
        this.products = [...this.products];
      }
    });
  }
}
