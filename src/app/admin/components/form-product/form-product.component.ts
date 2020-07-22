import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { ValidatorProduct } from '../../../utils/validators';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.createProduct(product).subscribe((newProduct) => {
        console.log(
          'FormProductComponent -> saveProduct -> newProduct',
          newProduct
        );
        this.router.navigate(['/admin/products']);
      });
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, ValidatorProduct.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  get priceField() {
    return this.form.get('price');
  }
}
