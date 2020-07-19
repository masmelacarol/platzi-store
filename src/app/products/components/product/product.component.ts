import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../core/models/product/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<string> = new EventEmitter();
  today = new Date();

  constructor() {}

  addCart(): void {
    console.log('ProductComponent -> addCart', 'hola');
    this.productClicked.emit(this.product.id);
  }
}
