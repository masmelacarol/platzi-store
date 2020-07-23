import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '@core/models/product/product.model';

@Pipe({
  name: 'count',
})
export class CountPipe implements PipeTransform {
  products: Product[] = [];
  constructor() {}
  transform(value: Product[]): Product[] {
    value.forEach((product) => {
      const itExist = this.products.find((item) => item.id === product.id);
      if (!itExist) {
        this.products.push({ ...product, count: 1 });
      } else {
        itExist.count += 1;
      }
    });

    this.products = [...this.products];
    return this.products;
  }
}
