import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { Product } from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  product = input<Product | null>(null)

  @Output() save = new EventEmitter<Product>()

  form!: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl<string>(this.product()?.title ?? '', {
        nonNullable: true,
        validators: Validators.required
      })
    })
  }

  onSubmit() {
    const product = this.form.value as Product
    this.save.emit(product)
  }
}
